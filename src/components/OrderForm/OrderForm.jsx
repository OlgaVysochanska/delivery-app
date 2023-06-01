import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import Input from 'shared/components/Input';

const OrderForm = () => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
  });
  const { name, email, phone, address } = state;
  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="name"
        value={name}
        placeholder="your name"
        type="text"
        onChange={handleChange}
      />
      <Input
        id="email"
        value={email}
        placeholder="your email"
        type="email"
        onChange={handleChange}
      />
      <Input
        id="phone"
        value={phone}
        placeholder="your phone"
        type="tel"
        onChange={handleChange}
      />
      <Input
        id="address"
        value={address}
        placeholder="your address"
        type="text"
        onChange={handleChange}
      />
    </form>
  );
};

export default OrderForm;
