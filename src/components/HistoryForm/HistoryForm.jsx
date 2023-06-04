import useForm from 'shared/hooks/useForm';
import Input from 'shared/components/Input/Input';

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
    <form onSubmit={e => handleSubmit(e, state)}>
      <Input
        id="email"
        label="Your email"
        name="email"
        value={email}
        placeholder="your email"
        type="email"
        handleChange={e => handleChange(e)}
      />
    </form>
  );
};

export default HistoryForm;
