import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({
  className = '',
}: LanguageSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  const buttonClickHandler = (): void => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(cls.languageSwitcher, {}, [className])}
      theme={ThemeButton.DEFAULT}
      onClick={buttonClickHandler}
    >
      {t('change-language')}
    </Button>
  );
};
