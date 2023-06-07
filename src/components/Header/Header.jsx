import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink className={styles.navLink} to="./shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="./cart">
            Shopping cart
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="./history">
            History
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
