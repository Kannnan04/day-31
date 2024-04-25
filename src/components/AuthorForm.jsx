import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AuthorForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', birthDate: '', biography: '' }}
      validate={values => {
        const errors = {};
        // Your validation logic here
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
          <Field type="text" name="birthDate" placeholder="Birth Date" />
          <ErrorMessage name="birthDate" component="div" />
          <Field type="text" name="biography" placeholder="Biography" />
          <ErrorMessage name="biography" component="div" />
          <button type="submit">Add Author</button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;