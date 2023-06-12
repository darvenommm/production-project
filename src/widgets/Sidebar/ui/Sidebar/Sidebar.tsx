import { useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapse, setCollapse] = useState<boolean>(false);

  const buttonClickHandler = (): void => {
    setCollapse((collapse) => !collapse);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapse]: collapse }, [
        className,
      ])}
    >
      <button onClick={buttonClickHandler}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
