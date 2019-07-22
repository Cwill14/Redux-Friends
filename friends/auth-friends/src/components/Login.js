import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../axiosAuth';

const Login = ({ touched, errors }) => {
    const [isLoading, setIsLoading] = useState(false);
    
    
    return (
        <Form>
            <div className="formGroup">
                <label>Username: </label>
                <Field type="text" name="username" />
                <p>{touched.username && errors.username}</p>          
            </div>
            <div className="formGroup">
                <label>Password: </label>
                <Field type="password" name="password" />
                <p>{touched.password && errors.password}</p>
            </div>
            {isLoading ? <p>loading...</p> : <button type="submit">Submit &rarr;</button>}
        </Form>
    );
};

// export default Login;
export default withFormik({
    mapPropsToValues(username, password) {
        return {
            // username: username || "",
            username: "Lambda School",
            // password: password || ""
            password: "i<3Lambd4"
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(6)
            .required(),
        password: Yup.string()
            .min(6)
            .required()
    }),
    handleSubmit(values, formikBag, ...props) {
        const url = "http://localhost:5000/api/login";
        // setIsLoading(true);
        axiosWithAuth()
            .post(url, values)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                formikBag.props.history.push("/list")
            })
            .catch(err => {
                console.log(err);
            } )
    }

})(Login);

// Lambda School
// i<3Lambd4