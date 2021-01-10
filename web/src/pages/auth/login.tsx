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
    // Set up router
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Login | Coffeemap</title>
            </Head>
            <div className='flex flex-col justify-between h-screen'>
                <div>
                    <NavBar />
                </div>
                <div className='flex justify-center'>
                    <div className='w-3/4 md:max-w-md m-7'>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={LoginSchema}
                            onSubmit={async (values, actions) => {
                                // Get data from from
                                const data = JSON.stringify({
                                    email: values.email,
                                    password: values.password,
                                });

                                // POST Config
                                const config: AxiosRequestConfig = {
                                    method: 'post',
                                    url: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    data: data,
                                    withCredentials: true,
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
                                            className='bg-green-600 text-white font-serif px-5 py-2 rounded-md text-base'
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
