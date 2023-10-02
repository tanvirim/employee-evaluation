

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Tanvir Mitul. All rights reserved.
        </p>
        <p className="text-gray-600">
          <a
            href="https://www.example.com/simon-game"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Simon Game
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
