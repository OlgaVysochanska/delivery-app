import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p>Something went wrong.</p>
      <NavLink to="/shop">Go to main page</NavLink>
    </div>
  );
};

export default NotFoundPage;
