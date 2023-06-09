import styles from './Input.module.css';

const Input = ({
  label,
  type,
  name,
  id,
  placeholder,
  title,
  value,
  handleChange,
  ...props
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        title={title}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
    </>
  );
};

export default Input;
