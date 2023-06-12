import { useTranslation } from 'react-i18next';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation('main');

  return <div>{t('main-text')}</div>;
};

export default MainPage;
