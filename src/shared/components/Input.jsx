const Input = ({
  label,
  type,
  id,
  placeholder,
  title,
  value,
  handleChange,
  ...props
}) => {
  return (
    <>
      <label htmlFor={type}>{label}</label>
      <input
        type={type}
        name={type}
        id={id}
        placeholder={placeholder}
        title={title}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
