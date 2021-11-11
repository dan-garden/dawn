import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Components/Button',
    component: () => <button></button>,
    argTypes: {},
};

const Template = ({ label, ...props }) => {
    return (
        <button className="btn btn-green" {...props}>
            {label}
        </button>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
};

// export const Pagination = Template.bind({});
// Pagination.args = {
// 	label: '1',
// 	variant: 'pagination',
// };
