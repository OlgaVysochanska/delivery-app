import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import Input from 'shared/components/Input/Input';

import styles from './OrderForm.module.css';

const OrderForm = ({ onSubmit, listOfOrders, total }) => {
  const { state, setState, handleChange } = useForm({
    initialState,
  });

  const handleSubmit = (e, data) => {
    e.preventDefault();
    onSubmit(data);
    setState({ ...initialState });
  };

  const currentShop = localStorage.getItem('shop');
  const { email, name, phone, address } = state;

  return (
    <form
      className={styles.form}
      onSubmit={e => {
        handleSubmit(e, {
          ...state,
          owner: email,
          shop: currentShop,
          goods: listOfOrders,
          totalPrice: total,
        });
      }}
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
      <div className={styles.button}>
        Total: {''} {total}
      </div>
      <button className={styles.button}>SUBMIT YOUR ORDER</button>
    </form>
  );
};

export default OrderForm;
