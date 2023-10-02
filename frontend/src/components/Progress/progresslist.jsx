/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressModal from "./modal";
import ProgressListTable from "./table";

function ProgressList({id}) {
  const [progress, setProgress] = useState([]);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [progressToEdit, setProgressToEdit] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); 

  const fetchProgress = async () => {
    try {
      
      const response = await axios.get(
        ` http://localhost:8080/api/v1/employee/progress/${id}?sort=${sortOrder}`
      );
      setProgress(response.data);
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, [sortOrder ,id]); // Re-fetch progress when sortOrder changes

  const openModalForEdit = (progressEntry) => {
    setIsProgressModalOpen(true);
    setProgressToEdit(progressEntry);
  };

  const openModalForAdd = () => {
    setIsProgressModalOpen(true);
    setProgressToEdit(null);
  };

  const handleModalClose = () => {
    setIsProgressModalOpen(false);
    // If editing is complete or a new progress entry is added, you can fetch progress again or update the state.
    // For example, to fetch progress again:
    fetchProgress();
  };

  const handleDelete = async (progressId) => {
    try {
      await axios.delete(
        `https://employee-evaluation-tanvir-mitul.onrender.com/api/v1/employee/progress/${progressId}`
      );

      // Update the frontend state after a successful delete operation
      setProgress((prevProgress) =>
        prevProgress.filter((entry) => entry._id !== progressId)
      );
      toast.success("Progress deleted successfully.");
    } catch (error) {
      console.error("Error deleting progress:", error);
      toast.error("An error occurred while deleting progress.");
    }
  };

  const toggleSortOrder = () => {
    // Toggle between ascending and descending order
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };
 
 
  return (
    <>
      <div>
        <button onClick={openModalForAdd}>Add Progress</button>

      </div>
      <ProgressListTable
      toggleSortOrder={toggleSortOrder}
      sortOrder={sortOrder}
        progress={progress}
        openModalForEdit={openModalForEdit}
        handleDelete={handleDelete}
      />
      <ProgressModal
        isOpen={isProgressModalOpen}
        onClose={handleModalClose}
        progressToEdit={progressToEdit}
      />
    </>
  );
}

export default ProgressList;
