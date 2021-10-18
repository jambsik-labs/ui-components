import React from 'react';
import { Layout } from './Layout';

export default {
    title: 'Templates/Layout',
    component: Layout,
};

export const defaultCase = () => {
    const menu = <div>menu</div>;
    const toolbar = <div>toolbar</div>;

    return (
        <Layout menu={menu} toolbar={toolbar}>
            <div>Container</div>
        </Layout>
    );
};
