const Footer = () => {
  return (
    <footer className='bg-gray-200 py-6'>
      <div className='container mx-auto text-center'>
        <p className='text-gray-600 text-sm'>
          &copy; {new Date().getFullYear()} Tanvir Mitul. All rights reserved.
        </p>
        <h2 className='text-2xl font-bold mb-2'>
          {' '}
          <a
            href='https://tanvir-mitul.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline text-xl '
          >
            Portfolio
          </a>
        </h2>
        <p className='text-gray-600 text-sm'>
          <a
            href='https://tanvirim.github.io/simon-game/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline text-3xl'
          >
            Simon Game
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
