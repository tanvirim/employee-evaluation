import Layout from '../components/Layout';

import ProgressList from '../components/progress/progresslist';

const EmployeeDashboard = () => {
  const { id } = JSON.parse(localStorage.getItem('data'));
  return (
    <Layout>
      <ProgressList className='h-screen' id={id} />
    </Layout>
  );
};

export default EmployeeDashboard;
