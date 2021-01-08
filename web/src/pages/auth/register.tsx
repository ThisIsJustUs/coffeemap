import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import { MyInput } from '../../components/MyInput';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';

interface Values {
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    password: string;
    password2: string;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password2: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
        .oneOf([Yup.ref('password'), null], "Passwords don't match"),
});

export default function IndexPage() {
    // Set up router
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Register | Coffeemap</title>
            </Head>
            <div className='flex flex-col justify-between h-screen'>
                <NavBar />
                <div className='flex justify-center'>
                    <div className='w-3/4 md:max-w-md m-7 py-16'>
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                role: '',
                                email: '',
                                password: '',
                                password2: '',
                            }}
                            validationSchema={LoginSchema}
                            onSubmit={async (values, actions) => {
                                // Get data from from
                                const data = JSON.stringify({
                                    ...values,
                                });

                                // POST Config
                                const config: AxiosRequestConfig = {
                                    method: 'post',
                                    url: 'http://localhost:4000/auth/register',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    data: data,
                                };

                                try {
                                    actions.setSubmitting(true);
                                    const res: AxiosResponse = await axios(
                                        config
                                    );
                                    if (res.status == 200) {
                                        actions.setSubmitting(false);
                                        router.push('/');
                                    } else {
                                        actions.setSubmitting(false);
                                    }
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                        >
                            {(props: FormikProps<Values>) => {
                                return (
                                    <Form>
                                        <div className='md:flex justify-between'>
                                            <MyInput
                                                label='Firstname'
                                                name='firstName'
                                                type='text'
                                                placeholder='Justus'
                                            />
                                            <MyInput
                                                label='Lastname'
                                                name='lastName'
                                                type='text'
                                                placeholder='Hebenstreit'
                                            />
                                        </div>
                                        <MyInput
                                            label='Role'
                                            name='role'
                                            type='text'
                                            placeholder='Customer'
                                        />
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
                                        <MyInput
                                            label='Confirm Password'
                                            name='password2'
                                            type='password'
                                            placeholder='••••••••••••'
                                        />
                                        <Button
                                            type='submit'
                                            isLoading={props.isSubmitting}
                                            className='bg-green-600 text-white px-5 py-2 rounded-md text-base'
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
