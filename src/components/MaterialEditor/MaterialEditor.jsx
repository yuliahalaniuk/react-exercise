import React from 'react';
import { Formik, Field, Form } from 'formik';

const MaterialEditor = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (values.title.trim() === ' ' || values.content.trim() === '') {
      return;
    }

    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', content: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => {
        return (
          <Form>
            <label>Description</label>
            <Field name="title" placeholder="Your title" type="text" />
            <br />

            <label>Content</label>
            <Field
              type="text"
              name="content"
              placeholder="Your material content"
            />
            <br />

            <button type="submit">Add materials</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MaterialEditor;
