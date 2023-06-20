import { RotatingLines } from 'react-loader-spinner';

import { classNames } from 'shared/lib/classNames';

interface LoaderProps {
  className?: string;
  // RotatingLines Props
  width?: string;
  visible?: boolean;
  strokeWidth?: string;
  strokeColor?: string;
  animationDuration?: string;
  ariaLabel?: string;
}

export const Loader = ({
  className = '',
  ...otherProps
}: LoaderProps): JSX.Element => {
  return (
    <div className={classNames('', {}, [className])}>
      <RotatingLines strokeColor="var(--primary-color)" {...otherProps} />
    </div>
  );
};
