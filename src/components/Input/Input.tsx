import './Input.scss';
import FloatLabel from '../FloatLabel/FloatLabel';

type InputProps = {
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  value,
  placeholder,
  onChange,
  onKeyDown,
}: InputProps) => {
  return (
    <FloatLabel value={value} label={placeholder}>
      <input
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
        value={value}
        className='input'
      />
    </FloatLabel>
  );
};

export default Input;
