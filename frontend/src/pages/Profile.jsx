const Profile = () => {
  const { id, name, role, email, iat } = JSON.parse(
    localStorage.getItem('data')
  );

  const formattedDate = new Date(Number(iat) * 1000)
    .toISOString()
    .replace('T', ' ')
    .replace(/\.\d+Z$/, '');

  return (
    <div className='bg-gray-200 rounded-lg shadow-md p-6 max-w-xl mx-auto mt-8'>
      <h1 className='text-3xl font-semibold mb-4'>My Profile</h1>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <p className='text-gray-600'>ID:</p>
          <p className='text-xl font-semibold'>{id}</p>
        </div>
        <div>
          <p className='text-gray-600'>Name:</p>
          <p className='text-xl font-semibold'>{name}</p>
        </div>
        <div>
          <p className='text-gray-600'>Role:</p>
          <p className='text-xl font-semibold'>{role}</p>
        </div>
        <div>
          <p className='text-gray-600'>Email:</p>
          <p className='text-xl font-semibold'>{email}</p>
        </div>
        <div>
          <p className='text-gray-600'>Created At:</p>
          <p className='text-xl font-semibold'>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
