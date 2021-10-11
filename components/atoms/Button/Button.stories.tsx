import React from 'react';
import { Button } from './Button';

export default {
    title: 'atoms/Button',
    component: Button,
};

export const defaultCase = () => (
    <Button disabled={false} variant="primary">
        Beep
    </Button>
);
