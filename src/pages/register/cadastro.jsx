import '../../css/formulario.css';

import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

import { useSelector } from 'react-redux';

import Overlay from '../../components/overlay';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Siganos from '../../components/siganos';
import Void from '../../components/void';

const Cadastro = () => {
    const { activeState } = useSelector(({ cartReducer }) => cartReducer);

    //validação
    const validationSchema = Yup.object().shape({
        nomeCompleto: Yup.string().required('Campo obrigatório*'),
        email: Yup.string().email('E-mail inválido').required('Campo obrigatório*'),
        telefone: Yup.string().required('Campo obrigatório*'),
        senha: Yup.string().required('Campo obrigatório*'),
        confirmarSenha: Yup.string()
            .oneOf([Yup.ref('senha'), null], 'Verifique a senha')
            .required('Campo obrigatório*'),
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

    // Função chamada ao enviar o formulário
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <>
            <Overlay isOpen={activeState} />
            <Header />
            <Void />
            <div className="wrapper-contact">
                <h1>Crie uma conta</h1>
                <p className="subtitle">Compre mais rápido e acompanhe seus pedidos.</p>

                <Formik
                    initialValues={{
                        nomeCompleto: '',
                        email: '',
                        telefone: '',
                        senha: '',
                        confirmarSenha: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {/* Renderiza o formulário */}
                    <Form className="wrapper-form">
                        <label>Nome Completo</label>
                        <Field type="text" name="nomeCompleto" />
                        <ErrorMessage name="nomeCompleto" component="div" className='error-message' />

                        <label>E-mail</label>
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" component="div" className='error-message' />

                        <label>Telefone</label>
                        <Field type="text" name="telefone" />
                        <ErrorMessage name="telefone" component="div" className='error-message' />

                        <label>Senha</label>
                        <Field type="password" name="senha"
                            className={formik.errors.senha && formik.touched.senha ? 'input-invalido' : ''} />
                        <ErrorMessage name="senha" component="div" className='error-message' />

                        <label>Confirmar senha</label>
                        <Field type="password" name="confirmarSenha" />
                        <ErrorMessage name="confirmarSenha" component="div" className='error-message' />

                        <button type="submit" className="submit">
                            Criar
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

export default Cadastro;
