import 'app/styles/index.scss';

export const getStyleDecorator = (Story: () => JSX.Element): JSX.Element => {
  return <>{Story()}</>;
};
