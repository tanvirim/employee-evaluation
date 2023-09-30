// ProgressList.js
import { useState, useEffect } from "react";
import axios from "axios";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressModal from "./modal";
import ProgressListTable from "./table";


function ProgressList() {
  const [progress, setProgress] = useState([]);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [progressToEdit, setProgressToEdit] = useState(null);


  const fetchProgress = async () => { 
    try {
      const { id } = JSON.parse(localStorage.getItem("data"));
      const response = await axios.get(
        `http://localhost:8080/api/v1/employee/progress/${id}`
      );
      setProgress(response.data);
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  }

  useEffect(() => {
    fetchProgress();
  }, []);

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
        `http://localhost:8080/api/v1/employee/progress/${progressId}`
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

  return (
    <>
      <button onClick={openModalForAdd}>Add Progress</button>
      <ProgressListTable
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
  )
}
export default ProgressList;