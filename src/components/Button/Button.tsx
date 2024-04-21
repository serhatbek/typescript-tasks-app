import { ReactNode } from 'react';
import './Button.scss';
import classNames from 'classnames';

type ButtonType = 'submit' | 'button';

type ButtonProps = {
  btnAction: () => void;
  type: ButtonType;
  iconLeft: ReactNode;
  iconRight: ReactNode;
  addClass: string;
  children: ReactNode;
};

const Button = ({
  btnAction,
  iconLeft,
  iconRight,
  type,
  addClass,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={btnAction}
      className={classNames(addClass, {
        'btn--left-icon': iconLeft,
        'btn--right-icon': iconRight,
      })}
      type={type}
      {...props}
    >
      {iconLeft ? iconLeft : null}
      {children}
      {iconRight ? iconRight : null}
    </button>
  );
};

export default Button;
