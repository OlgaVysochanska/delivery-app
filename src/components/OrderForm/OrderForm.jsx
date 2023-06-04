import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import Input from 'shared/components/Input/Input';

import styles from './OrderForm.module.css';

const OrderForm = ({ onSubmit, listOfOrders }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, phone, address } = state;

  const currentShop = localStorage.getItem('shop');

  return (
    <form
      className={styles.form}
      onSubmit={e =>
        handleSubmit(email, name, phone, address, currentShop, listOfOrders)
      }
    >
      <Input
        id="name"
        label="Your name"
        name="name"
        value={name}
        placeholder="your name"
        type="text"
        handleChange={e => handleChange(e)}
      />
      <Input
        id="email"
        label="Your email"
        name="email"
        value={email}
        placeholder="your email"
        type="email"
        handleChange={e => handleChange(e)}
      />
      <Input
        id="phone"
        label="Your phone"
        name="phone"
        value={phone}
        placeholder="your phone"
        type="tel"
        handleChange={handleChange}
      />
      <Input
        id="address"
        label="Your address"
        name="address"
        value={address}
        placeholder="your address"
        type="text"
        handleChange={handleChange}
      />
      <button className={styles.button}>SUBMIT YOUR ORDER</button>
    </form>
  );
};

export default OrderForm;
