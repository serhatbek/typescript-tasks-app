import './Input.scss';
import FloatLabel from '../FloatLabel/FloatLabel';

type InputProps = {
  type: string;
  value: string;
  placeholder: string;
};

const Input = ({ type, value, placeholder, ...props }: InputProps) => {
  return (
    <FloatLabel value={value} label={placeholder}>
      <input {...props} type={type} value={value} className='input' />
    </FloatLabel>
  );
};

export default Input;
