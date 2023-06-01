import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="./shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="./cart">Shopping cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
