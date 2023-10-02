/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProgressModal from './modal';
import ProgressListTable from './table';
import { ApiUrl } from '../../constants'; // Import the ApiUrl constant

function ProgressList({ id }) {
  const { role } = JSON.parse(localStorage.getItem('data'));
  const [progress, setProgress] = useState([]);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [progressToEdit, setProgressToEdit] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const fetchProgress = async () => {
    try {
      const response = await axios.get(
        `${ApiUrl}/employee/progress/${id}?sort=${sortOrder}` // Use ApiUrl here
      );
      setProgress(response.data);
    } catch (error) {
      console.error('Error fetching progress:', error);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, [sortOrder, id]); // Re-fetch progress when sortOrder changes

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
      await axios.delete(`${ApiUrl}/employee/progress/${progressId}`); // Use ApiUrl here

      // Update the frontend state after a successful delete operation
      setProgress((prevProgress) =>
        prevProgress.filter((entry) => entry._id !== progressId)
      );
      toast.success('Progress deleted successfully.');
    } catch (error) {
      console.error('Error deleting progress:', error);
      toast.error('An error occurred while deleting progress.');
    }
  };

  const toggleSortOrder = () => {
    // Toggle between ascending and descending order
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div>
      {role === 'employee' ? (
        <button
          className='text-2xl bg-green-600 text-white px-3 py-2 rounded-md mt-5 hover:bg-green-500'
          onClick={openModalForAdd}
        >
          Add Progress
        </button>
      ) : (
        ''
      )}
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
    </div>
  );
}

export default ProgressList;
