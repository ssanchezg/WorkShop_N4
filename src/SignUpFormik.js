import React from "react";
import "./styles.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export default class SignUpFormik extends React.Component {
  render() {
    const validationSchema = Yup.object().shape({
      name: Yup.string().required("Required"),
      numberOfPizzas: Yup.number()
        .min(1, "Minum 1 pizza!")
        .max(10, "Maximum 10 pizzas!")
        .required("Required"),
      typeOfPizza: Yup.string().required("Please, select type")
    });

    const initialValues = {
      name: "",
      numberOfPizzas: 0,
      typeOfPizza: "veggie"
    };
    async function onSubmit(values) {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    }
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Formik</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => onSubmit(values)}
        >
          {({ errors, touched, values }) => (
            <Form>
              <label htmlFor="name">Name:</label>
              <Field name="name" type="text" />
              {errors?.name && touched?.name && <div>{errors.name}</div>}
              <label htmlFor="numberOfPizzas">Number of Pizzas:</label>
              <Field name="numberOfPizzas" type="number" />
              {errors?.numberOfPizzas && touched?.numberOfPizzas && (
                <div>{errors.numberOfPizzas}</div>
              )}
              <label htmlFor="typeOfPizza">Type:</label>
              <Field name="typeOfPizza" as="select">
                <option value="veggie">Veggie</option>
                <option value="hawaiian">Hawaiian</option>
                <option value="pepperoni">Pepperoni</option>
              </Field>
              {errors?.typeOfPizza?.id && touched?.typeOfPizza && (
                <div>{errors.typeOfPizza}</div>
              )}
              <p>
                Hello, this is {values.name}! I want to order{" "}
                {values.numberOfPizzas} {values.typeOfPizza} pizzas.
              </p>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}
