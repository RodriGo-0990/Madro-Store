import '../css/formulario.css'
import { useSelector } from "react-redux";
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Overlay from '../components/overlay'
import Header from "../components/header"
import Footer from '../components/footer'
import Void from '../components/void'
import Siganos from '../components/siganos'
import Loading from '../components/loading';
import sendMailTo from '../api/mailTo';


export default function Contatos() {
    //===variaveis de estado===//
    const { activeState } = useSelector(({ cartReducer }) => cartReducer);
    const [isLoading, setLoading] = useState(false);

    //validação de formulário
    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Campo obrigatório*'),
        email: Yup.string().email('*E-mail inválido*').required('Campo obrigatório*'),
        telefone: Yup.string().required('Campo obrigatório*'),
        mensagem: Yup.string().required('Campo obrigatório*')
    });
    //======================//

    //requisição============//
    const handleSubmit = async (values) => {
        try {
            setLoading(true)
            const response = await sendMailTo(values)
            window.alert(response.message)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
    //======================//
    return (
        <>
            <Overlay isOpen={activeState} />
            <Header />
            <Void />
            <div className="wrapper-contact">
                <h1>Contatos</h1>
                <p className='subtitle'>Mande sua mensagem</p>
                <Formik
                    initialValues={{
                        nome: '',
                        email: '',
                        telefone: '',
                        mensagem: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className="wrapper-form">
                            <label>Nome Completo</label>
                            <Field type='text' name='nome' className={`field ${errors.nome && touched.nome ? 'input-invalido' : 'field'}`} />
                            <ErrorMessage name="nome" component="div" className='error-message' />
                            <label>E-mail</label>
                            <Field type='text' name='email' className={`field ${errors.email && touched.email ? 'input-invalido' : 'field'}`} />
                            <ErrorMessage name="email" component="div" className='error-message' />
                            <label>Telefone</label>
                            <Field type='text' name='telefone' className={`field ${errors.telefone && touched.telefone ? 'input-invalido' : 'field'}`} />
                            <ErrorMessage name="telefone" component="div" className='error-message' />
                            <label>Mensagem</label>
                            <Field as='textarea' type='textarea' name='mensagem' className={`field ${errors.mensagem && touched.mensagem ? 'error-textarea' : 'textarea'}`} />
                            <ErrorMessage name="mensagem" component="div" className='error-message' />
                            {isLoading ?
                                <Loading /> :
                                <button type="submit" className='submit'>Enviar</button>
                            }

                        </Form>
                    )}
                </Formik>
            </div>
            <Void />
            <Siganos />
            <Void />
            <Footer />
        </>

    )

}