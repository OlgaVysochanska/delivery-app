import ShopList from 'components/ShopList/ShopList';
import GoodsList from 'components/GoodsList/GoodsList';

import styles from './ShopPage.module.css';

const ShopPage = () => {
  return (
    <div className={styles.content}>
      <ShopList />
      <GoodsList />
    </div>
  );
};

export default ShopPage;
