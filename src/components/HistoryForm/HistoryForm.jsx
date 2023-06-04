import useForm from 'shared/hooks/useForm';
import Input from 'shared/components/Input/Input';

import styles from './HistoryForm.module.css';

const HistoryForm = ({ onSubmit }) => {
  const initialState = {
    email: '',
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email } = state;
  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="email"
        label="Your email"
        name="email"
        value={email}
        placeholder="your email"
        type="email"
        handleChange={e => handleChange(e)}
      />
      <button className={styles.button}>Find your orders</button>
    </form>
  );
};

export default HistoryForm;
