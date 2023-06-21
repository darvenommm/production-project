import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('Sidebar', () => {
  test('should render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('sidebar should toggle', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    const button = screen.getByTestId('sidebar-toggle');

    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapse');

    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapse');
  });
});
