/* eslint-disable react/prop-types */
// ProgressModal.js
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalWrapper, ModalContent } from "./styles.modal"; // Import the styled components
import {GiTireIronCross} from 'react-icons/gi'
function ProgressModal({ isOpen, onClose, progressToEdit }) {
  const [editingComplete, setEditingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id, name } = JSON.parse(localStorage.getItem("data"));

  const [progress, setProgress] = useState({
    projectName: "",
    projectContribution: "",
    progressPercentage: Number,
    user: id,
    userName: name,
  });

  useEffect(() => {
    if (progressToEdit) {
      // If progressToEdit is provided, populate the modal for editing
      setProgress(progressToEdit);
    } else {
      // If progressToEdit is not provided, reset the modal for adding
      setProgress({
        projectName: "",
        projectContribution: "",
        progressPercentage: 0,
        user: id,
        userName: name,
      });
    }
    // Reset the editingComplete state whenever the modal is opened or closed
    setEditingComplete(false);
  }, [progressToEdit, isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProgress({ ...progress, [name]: value, user: id, userName: name });
  };

  const handleEditComplete = () => {
    setEditingComplete(true);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true during the operation.

    try {
      if (
        !progress.projectName ||
        !progress.projectContribution ||
        !progress.progressPercentage
      ) {
        // Show a Toastify error notification if required fields are empty
        toast.error("Please fill in all required fields.");
        setIsLoading(false); // Reset loading state
        return;
      }

      if (progressToEdit) {
        // If progressToEdit is provided, it's an edit operation (PUT request)
        await axios.put(
          `https://employee-evaluation-tanvir-mitul.onrender.com/api/v1/employee/progress/${progressToEdit._id}`,
          progress
        );
        handleEditComplete(); // Mark editing as complete
        toast.success("Progress edited successfully.");
      } else {
        // If progressToEdit is not provided, it's an add operation (POST request)
        await axios.post(
          "https://employee-evaluation-tanvir-mitul.onrender.com/api/v1/employee/progress",
          progress
        );
        toast.success("Progress added successfully.");
      }
      onClose();
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure.
    }
  };

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent className="modal-content  ">
        <span className="close" onClick={onClose}>
          <GiTireIronCross/>
        </span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Name:</label>
            <input
              type="text"
              name="projectName"
              value={progress.projectName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Project Contribution:</label>
            <textarea
              name="projectContribution"
              value={progress.projectContribution}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Progress Percentage:</label>
            <input
              type="number"
              name="progressPercentage"
              value={progress.progressPercentage}
              onChange={handleInputChange}
              required
            />
          </div>
          <section className="button-group">
            <button className="save-button" type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save"}
            </button>
            <button className="cancel-button" onClick={handleCancel} disabled={isLoading}>
              Cancel
            </button>
          </section>
        </form>
        {editingComplete && (
          <p>
            Editing complete! <button onClick={onClose}>Close</button>
          </p>
        )}
      </ModalContent>
    </ModalWrapper>
  );
}

export default ProgressModal;
