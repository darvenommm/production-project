import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import i18nForTests from 'shared/config/i18n/i18nForTests';

import type { RenderResult } from '@testing-library/react';
import type { ReactNode } from 'react';

export const renderWithTranslation = (children: ReactNode): RenderResult => {
  return render(
    <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>,
  );
};
