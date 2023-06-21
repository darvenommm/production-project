import { screen, render } from '@testing-library/react';

import { Button, ThemeButton } from './Button';

describe('UI Button', () => {
  test('should render', () => {
    render(<Button>Button</Button>);

    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  test('check default button theme', () => {
    render(<Button>Button</Button>);

    expect(screen.getByText('Button')).toHaveClass('clear');
  });

  test('check not default button theme', () => {
    render(<Button theme={ThemeButton.BEAUTIFUL}>Button</Button>);

    expect(screen.getByText('Button')).toHaveClass('beautiful');
  });
});
