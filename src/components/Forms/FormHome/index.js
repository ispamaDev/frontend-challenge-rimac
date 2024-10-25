import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

import Button from "../../../components/Button"
import Checkbox from "../../../components/Checkbox"
import { useUser } from '../../../context/UserContext';
import "./form.css"
import { fetchUser } from '../../services/getUser';
import { useQuery } from '@tanstack/react-query';

const validationSchema = Yup.object().shape({
    documentType: Yup.string().required('El tipo de documento es obligatorio'),
    documentNumber: Yup.string()
        .required('El número de documento es obligatorio')
        .matches(/^\d+$/, 'Solo se permiten números'),
    celular: Yup.string()
        .required('El celular es obligatorio')
        .matches(/^\d+$/, 'Solo se permiten números')
        .min(9, 'El número de celular debe tener 9 dígitos')
        .max(9, 'El número de celular debe tener 9 dígitos'),
    isChecked1: Yup.boolean().oneOf([true], 'Debes aceptar los términos'),
    isChecked2: Yup.boolean().oneOf([true], 'Debes aceptar la política de comunicaciones'),
});

const Index = () => {

    const navigate = useNavigate();
    const { login } = useUser();
    const [messageError, setMessageError] = useState("")
    const [mydates, setMyDates] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (messageError.length > 0) {
            const timer = setTimeout(() => {
                setMessageError("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [messageError])

    const getdata = async (infoResponsable) => {
        setLoading(true);
        setError(null);

        try {
            const data = await fetchUser();
            const newUser = { info: data, responsable: infoResponsable }
            login(newUser)
            navigate('/register-plan');
        } catch (err) {
            setError('Hubo un error al cargar los datos'); 
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className='form'>
            <div className='form__title'>Creado para ti y tu familia</div>
            <p className='form__description'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
            <Formik
                initialValues={{
                    documentType: '',
                    documentNumber: '',
                    celular: '',
                    isChecked1: false,
                    isChecked2: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    if (values?.documentNumber === "47206206" && values?.celular == "973267733") {
                        getdata({ document: values?.documentNumber, celular: values?.celular });
                    } else {
                        setMessageError("Usuario no registrado. Verifica el celular o documento de identidad.")
                    }
                }}
            >
                {({ values, setFieldValue, isValid, dirty }) => (
                    <Form >
                        <div className='form__inputs'>

                            <div className='form__identification'>
                                <div className="input-group">
                                    <Field as='select' name='documentType'>
                                        <option value=''>Selecciona un tipo de documento</option>
                                        <option value='DNI'>DNI</option>
                                        <option value='Pasaporte'>Pasaporte</option>
                                        <option value='Carnet de Extranjería'>Carnet de Extranjería</option>
                                    </Field>
                                    <ErrorMessage name='documentType' component='div' className='error' />
                                    <div>
                                        <span>Nro. de documento</span>
                                        <Field type='text' name='documentNumber' placeholder='12345678' />
                                    </div>
                                </div>
                                <ErrorMessage name='documentNumber' component='div' className='error' />
                            </div>

                            <div className="input-group">
                                <span>Celular</span>
                                <Field type='text' name='celular' placeholder='9...' />

                            </div>
                            <ErrorMessage name='celular' component='div' className='error' />
                            <div>
                                <Checkbox label="Accept Terms and Conditions"
                                    checked={values.isChecked1}
                                    onChange={() => setFieldValue('isChecked1', !values.isChecked1)}
                                />
                                <ErrorMessage name='isChecked1' component='div' className='error' />
                            </div>
                            <div>

                                <Checkbox label="Acepto la Política Comunicaciones Comerciales"
                                    checked={values.isChecked2}
                                    onChange={() => setFieldValue('isChecked2', !values.isChecked2)} />
                                <ErrorMessage name='isChecked2' component='div' className='error' />
                            </div>
                            <a>Aplican Términos y Condiciones.</a>
                            {messageError && <p className='error'>{messageError}</p>}
                            <Button type='submit' disabled={!(isValid && dirty)}>
                                {loading ? "Cargando..." : "Cotiza aquí"}
                            </Button>
                            {error && <div>Error al cargar los planes</div>}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Index