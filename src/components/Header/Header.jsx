import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink to="./shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="./cart">Shopping cart</NavLink>
        </li>
        <li>
          <NavLink to="./history">History</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
