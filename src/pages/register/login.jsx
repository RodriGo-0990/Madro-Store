import '../../css/formulario.css';

import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

import Overlay from '../../components/overlay';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Siganos from '../../components/siganos';
import Void from '../../components/void';

const Login = () => {
    const { activeState } = useSelector(({ cartReducer }) => cartReducer);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('E-mail inválido').required('Campo obrigatório*'),
        senha: Yup.string().required('Campo obrigatório*'),
    });

    const formik = useFormik({
        initialValues: {
            nomeCompleto: '',
            email: '',
            telefone: '',
            senha: '',
            confirmarSenha: '',
        },
    })
    return (
        <>
            <Overlay isOpen={activeState} />
            <Header />
            <Void />
            <div className="wrapper-contact">
                <h1>Iniciar sessão</h1>
                <p className="subtitle">Compre mais rápido e acompanhe seus pedidos.</p>

                <Formik
                    initialValues={{
                        email: '',
                        senha: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        // Lógica de login aqui
                        console.log(values);
                    }}
                >
                    <Form className="wrapper-form">
                        <label>E-mail</label>
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" component="div" className='error-message' />

                        <label>Senha</label>
                        <Field
                            type="password"
                            name="senha"
                            className={formik.errors?.senha && formik.touched?.senha ? 'input-invalido' : ''}
                        />
                        <ErrorMessage name="senha" component="div" className='error-message' />

                        <button type="submit" className='submit'>
                            Entrar
                        </button>
                    </Form>
                </Formik>
            </div>
            <Void />
            <Siganos />
            <Void />
            <Footer />
        </>
    );
};

export default Login;
