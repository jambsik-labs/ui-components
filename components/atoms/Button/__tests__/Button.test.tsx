import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../Button';

describe('Button test', () => {
    it('Should render component without errors', () => {
        const { container } = render(<Button />);

        expect(container).toMatchSnapshot();
    });
});
