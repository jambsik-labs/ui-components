import React from 'react';
import { Paginator } from './Paginator';

export default {
    title: 'Organisms/Paginator',
    component: Paginator,
};

export const defaultCase = () => <Paginator total={18} onClickPage={(page: number) => alert(page)} />;
