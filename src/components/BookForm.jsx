import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookForm = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
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
          <Field type="text" name="title" placeholder="Title" />
          <ErrorMessage name="title" component="div" />
          <Field type="text" name="author" placeholder="Author" />
          <ErrorMessage name="author" component="div" />
          <Field type="text" name="isbn" placeholder="ISBN" />
          <ErrorMessage name="isbn" component="div" />
          <Field type="text" name="publicationDate" placeholder="Publication Date" />
          <ErrorMessage name="publicationDate" component="div" />
          <button type="submit">{initialValues.isUpdated ? 'Update' : 'Add Book'}</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;