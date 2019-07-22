import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../axiosAuth';

const AddFriend = (values, props) => {
    return (
        <Form>
            <div className="add-form-group">
                <label>Name: </label>
                <Field name="name" />
            </div>
            <div className="add-form-group">
                <label>Age: </label>
                <Field type="number" name="age" />
            </div>
            <div className="add-form-group">
                <label>Email: </label>
                <Field type="email" name="email" />
            </div>
            <button type="submit">Add New Friend</button>
        </Form>
    );
};

export default withFormik({
    mapPropsToValues(name, age, email) {
        return {
            name: "",
            age: age || "",
            email: email || ""
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        age: Yup.number().required(),
        email: Yup.string().email().required()
    }),
    handleSubmit(values, { resetForm }, props){
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', values)
            .then(res => {
                console.log(props);
                props.setList(res.data);
                resetForm();
            })
            .catch(err => {
                console.log(err);
            })
    }
})(AddFriend);