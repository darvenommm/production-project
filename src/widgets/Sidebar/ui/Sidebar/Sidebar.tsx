import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className = '' }: SidebarProps): JSX.Element => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const buttonClickHandler = (): void => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapse]: collapsed }, [
        className,
      ])}
    >
      <button onClick={buttonClickHandler}>{t('toggle')}</button>
      <div
        className={classNames(cls.switchers, {
          [cls['switchers--collapsed']]: collapsed,
        })}
      >
        <ThemeSwitcher
          className={classNames(cls.themeSwitcher, {
            [cls['themeSwitcher--collapsed']]: collapsed,
          })}
        />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
