import { render, screen } from '@testing-library/react';
import { Button, Buttontheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={Buttontheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
