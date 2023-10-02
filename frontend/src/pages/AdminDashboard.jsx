import { useState } from 'react';
import AllEmployees from '../components/AllEmployeeId';
import FindUsers from '../components/FindUsers';
import ProgressList from '../components/progress/progresslist';
import Layout from '../components/Layout';
import AddEmployeeRecommendation from '../components/AddEmployeeRecomendation';
import AllEmployeesName from '../components/AllEmployeeName';
import { Link } from 'react-router-dom';
// import AllProgress from "../components/progress/ShowAllProgress"

const AdminDashboard = () => {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [selectedEmployeeName, setSelectedEmployeeName] = useState('');

  const handleEmployeeSelectId = (employeeId) => {
    setSelectedEmployeeId(employeeId);
  };

  const handleEmployeeSelectName = (employeeName) => {
    setSelectedEmployeeName(employeeName);
  };

  return (
    <Layout>
      <section className='mb-6 mt-4 border-slate-600'>
        <div className='text-2xl text-center font-bold text-slate-600 mb-4'>
          Employee Recommendation System
        </div>
        <AllEmployeesName onSelectEmployeeName={handleEmployeeSelectName} />
        <AddEmployeeRecommendation employeeName={selectedEmployeeName} />
        <div className='fixed bottom-20 right-4'>
          <Link
            to='/allrecommendation' // Replace with your actual route
            className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center inline-block'
          >
            All Recommendations
          </Link>
        </div>
      </section>

      <section>
        <div className='text-2xl text-center font-bold text-slate-600 mb-4'>
          {' '}
          Employee Performance{' '}
        </div>
        <AllEmployees onSelectEmployeeId={handleEmployeeSelectId} />
        <ProgressList id={selectedEmployeeId} />
      </section>
      <section>
        <FindUsers />
      </section>
    </Layout>
  );
};

export default AdminDashboard;
