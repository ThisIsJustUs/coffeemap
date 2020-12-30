import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/react';
import { MyInput } from '../components/MyInput';

interface Values {
    email: string;
    password: string;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

export default function IndexPage() {
    return (
        <div className='flex justify-center'>
            <div className='w-1/3 m-7'>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(true);
                        console.log(values);
                        setTimeout(() => {
                            actions.setSubmitting(false);
                            actions.resetForm();
                        }, 2000);
                    }}
                >
                    {(props: FormikProps<Values>) => {
                        return (
                            <Form>
                                <MyInput
                                    label='Email'
                                    name='email'
                                    type='email'
                                    placeholder='justus@example.com'
                                />
                                <MyInput
                                    label='Password'
                                    name='password'
                                    type='password'
                                    placeholder='••••••••••••'
                                />
                                <Button
                                    type='submit'
                                    isLoading={props.isSubmitting}
                                    className='bg-green-500 text-white px-5 py-2 rounded-md text-base'
                                >
                                    Submit
                                </Button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}
