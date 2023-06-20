import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className = '' }: ErrorPageProps): JSX.Element => {
  const { t } = useTranslation();

  const buttonClickHandler = (): void => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.errorPage, {}, [className])}>
      <h2 className={cls.title}>{t('error-page-title')}</h2>
      <Button theme={ThemeButton.BEAUTIFUL} onClick={buttonClickHandler}>
        {t('reload-page')}
      </Button>
    </div>
  );
};
