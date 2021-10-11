/** @jsxImportSource theme-ui */

import React from 'react';
import { ButtonProps } from '@theme-ui/components';
import { Button as ThemeUIButton } from 'theme-ui';

const buttonStyles = {
    cursor: 'pointer',
};

export const Button = (props: ButtonProps) => {
    return <ThemeUIButton sx={buttonStyles} {...props} />;
};
