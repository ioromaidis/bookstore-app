import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <h1>Welcome to our bookstore</h1>

      <Link to="/search">Enter</Link>
    </>
  );
};

export default Landing;
