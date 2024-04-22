import { ReactNode } from 'react';
import './Button.scss';
import classNames from 'classnames';

type ButtonType = 'submit' | 'button';

type ButtonProps = {
  btnAction: () => void;
  type: ButtonType;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  addClass?: string;
  children?: ReactNode;
};

const Button = ({
  btnAction,
  iconLeft,
  iconRight,
  type,
  addClass,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={btnAction}
      className={classNames(addClass, {
        'btn--left-icon': iconLeft,
        'btn--right-icon': iconRight,
      })}
      type={type}
    >
      {iconLeft ? iconLeft : null}
      {children}
      {iconRight ? iconRight : null}
    </button>
  );
};

export default Button;
