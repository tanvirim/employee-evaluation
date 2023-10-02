/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { ApiUrl } from '../constants'; // Import the ApiUrl constant

function AddEmployeeRecommendation({ employeeName }) {
  const [isRecommendedForIncrement, setIsRecommendedForIncrement] =
    useState(false);
  const [isRecommendedForPromotion, setIsRecommendedForPromotion] =
    useState(false);
  const [message, setMessage] = useState(''); // To display success or error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${ApiUrl}/employee/employee-recommendation`, // Use ApiUrl here
        {
          employeeName,
          isRecommendedForIncrement,
          isRecommendedForPromotion,
        }
      );

      // Handle success
      setMessage('Recommendation added successfully');
      resetForm();
    } catch (error) {
      // Handle error
      setMessage('Failed to add recommendation');
      console.error('Error adding employee recommendation:', error);
    }
  };

  const resetForm = () => {
    setIsRecommendedForIncrement(false);
    setIsRecommendedForPromotion(false);
  };

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <label htmlFor='increment' className='inline-block mr-2'>
            Recommended for Increment:
          </label>
          <input
            type='checkbox'
            id='increment'
            checked={isRecommendedForIncrement}
            onChange={() =>
              setIsRecommendedForIncrement(!isRecommendedForIncrement)
            }
            className='custom-checkbox'
          />
          <span className='checkbox-label'>Increment</span>
        </div>
        <div className='mb-4'>
          <label htmlFor='promotion' className='inline-block mr-2'>
            Recommended for Promotion:
          </label>
          <input
            type='checkbox'
            id='promotion'
            checked={isRecommendedForPromotion}
            onChange={() =>
              setIsRecommendedForPromotion(!isRecommendedForPromotion)
            }
            className='custom-checkbox'
          />
          <span className='checkbox-label'>Promotion</span>
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'
        >
          Recommend Employee
        </button>
      </form>
      {message && (
        <div
          className={`mb-4 ${
            message.startsWith('Failed') ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {message}
        </div>
      )}
      <style>
        {`
          .custom-checkbox {
            appearance: none;
            width: 16px;
            height: 16px;
            border: 2px solid #333;
            border-radius: 4px;
            outline: none;
            vertical-align: middle;
            cursor: pointer;
            margin-right: 8px;
          }

          .custom-checkbox:checked {
            background-color: #333;
          }

          .checkbox-label {
            vertical-align: middle;
          }
        `}
      </style>
    </div>
  );
}

export default AddEmployeeRecommendation;
