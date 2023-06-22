import { BrowserRouter } from 'react-router-dom';

export const getRouterDecorator = (Story: () => JSX.Element): JSX.Element => {
  return <BrowserRouter>{Story()}</BrowserRouter>;
};
