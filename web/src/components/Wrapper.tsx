import React from 'react';

interface WrapperProps {}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return <div className='flex justify-center'>{children}</div>;
};

export { Wrapper };
