import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl
} from "formik-chakra-ui";

import { Box, ButtonGroup, Heading } from "@chakra-ui/react";



function Forms() {
return (
 <div style={{"height": "1000"}}>
    <Heading as="h1" size="xl" textAlign="center" style={{"marginTop":10}}>
      Jumpstart Seniors LMS
    </Heading>
    <Formik
      initialValues={{
        courseCode: '',
        title: '',
        description: '',
        source: '',
        datePosted: ''
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert("Submitted");
        // make post request to backend
        axios.post('https://jumpstartbackendd.herokuapp.com/notes', values)
        // go back to home
        window.location.href = "/";
      }}
    >
      <Form style={{"height": 1000, "margin": 10}}>
          <InputControl name="courseCode" label="Course Code" />
          <InputControl name="title" label="Note Title" />
          <InputControl name="description" label="Note Description" />
          <InputControl name="source" label="Link" />
          <InputControl name="datePosted" label="Date" />

          <ButtonGroup style={{"marginTop":10}}>
            <SubmitButton bg="gray.400" >Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>
      </Form>
    </Formik>
  </div>
  )
}


export default Forms;
