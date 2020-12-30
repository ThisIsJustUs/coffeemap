import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
};

export const MyInput: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, { error, touched }] = useField(props);
    return (
        <div className='py-4'>
            <label htmlFor={field.name}>{label}</label>
            <input
                {...field}
                {...props}
                id={field.name}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
            {error && touched ? (
                <span className='text-red-500'>{error}</span>
            ) : null}
        </div>
    );
};
