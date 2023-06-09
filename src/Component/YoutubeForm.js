import React from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log('Form data', values)
}


const validationSchema=Yup.object({
  name:Yup.string().required('Required'),
  email:Yup.string().email('initial email value').required('Required'),
  channel:Yup.string().required('Required')

})

function YoutubeForm() {
 
  return (
    <Formik 
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
      <Form >
      <div className="formControl">

        <label htmlFor="name">Name</label>
        <Field
          type="text"
          id="name"
          name="name"
        />
        <ErrorMessage name="name"/>
      </div>
      <div className="formControl">

        <label htmlFor="emial">Email</label>
        <Field
          type="text"
          id="email"
          name="email"
        />
        <ErrorMessage name="email"/>
      </div>
      <div className="formControl">
        <label htmlFor="channel">Channel</label>
        <Field
          type="text"
          id="channel"
          name="channel"
        />
        <ErrorMessage name="channel"/>
      </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
