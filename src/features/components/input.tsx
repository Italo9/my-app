import { IInputProps } from "../../interfaces/props.interfaces";


export const Input: React.FC<IInputProps> = ({
  label,
  name,
  placeholder,
  error,
  register,
  ...rest
}) => {
  return (
    <div>
      <label>{label}</label>
      <input placeholder={placeholder} {...register(name)} {...rest} />
      {!!error && <span>{typeof error === "string" && error}</span>}
    </div>
  );
};
