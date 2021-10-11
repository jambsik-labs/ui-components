import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input test', () => {
    it('Should render component without errors', () => {
        const { container } = render(<Input />);

        expect(container).toMatchSnapshot();
    });
});
