import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const AddCustomer = () => {
  const handleSubmit = async (values) => {
    console.log(values)
    await axios.post(process.env.REACT_APP_API_URL + '/customers', values)
    window.location.reload()
    };

  return (
    <Formik
      initialValues={{ name: '', email: '', tel: '', cordx: 0, cordy: 0 }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='form'>
          <div>
            <label htmlFor="name">Nome:</label>
            <br />
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">E-mail:</label>
            <br />
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="tel">Telefone:</label>
            <br />
            <Field type="tel" id="tel" name="tel" />
            <ErrorMessage name="tel" component="div" />
          </div>

          <div>
            <label htmlFor="cordx">Cordenada X:</label>
            <br />
            <Field type="number" id="cordx" name="cordx" />
            <ErrorMessage name="cordx" component="div" />
          </div>

          <div>
            <label htmlFor="cordx">Cordenada Y:</label>
            <br />
            <Field type="number" id="cordy" name="cordy" />
            <ErrorMessage name="cordy" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddCustomer;
