import React, {useState} from 'react'
import axios from 'axios'
import defaultImage from '../assets/images/defaultImage.png'
import {Form as FormikForm , Field , withFormik} from 'formik'
import * as Yup from 'yup'


const LoginForm = ( values , props) => {

    const {setPeople} = props

    return(
        <div className = 'form-container'>
        <FormikForm >
            <h2 className = 'form-header'>Sign Up</h2>
        
            <Field type = 'text' placeholder = 'Name' name = 'name' className = 'input-field' />

            <Field type = 'email' placeholder = 'Email' name = 'email' className = 'input-field' />

            <Field type = 'password' placeholder = 'Password' name = 'password'  className = 'input-field' />

            <Field component="select" className="role-select" name="role">
                <option>Select A Role</option>
                <option value="">Big Boss</option>
                <option value="">Front-End Developer</option>
                <option value="">Back-End Developer</option>
            </Field>

            <label htmlFor = 'file' className = 'file-label'>
                <p>Upload Profile Photo</p>
                <Field type = 'file' name = 'file' value = {values.file} className = 'button'/>
            </label>

            <label className = 'checkbox-label'>
                <Field type = 'checkbox' name = 'terms'  value = {values.terms}/>
                <p>I have read and agree to the Terms of Service</p>
            </label>

            <button type = 'submit'>Submit</button>
        
        </FormikForm>
        </div>
    )

}



const FormikLoginForm = withFormik( {

    

    mapPropsToValues({name, email, password, terms, file}){
        return{
            name : name || '',
            email : email || '',
            password : password || '',
            terms : terms || false,
            file : file || defaultImage
        }
    },

    validationSchema : Yup.object().shape({
        name : Yup.string().required('Name is required'),
        email : Yup.string().email('Email is not valid.').required('Email is required.'),
        password : Yup.string().min(7, 'Password must be 6 characters or longer').required('Password is required.'),
        terms: Yup.boolean('You must agree to terms of service before signing up.')
    }),

    handleSubmit(values, props){


        const setUsers = props.props.setUsers

        axios
        .post('https://reqres.in/api/users', values)
        .then(res => {
            
            setUsers(users => [...users, res.data])
        
        })
        .catch( err => console.log(err))

    }

})(LoginForm)

export default FormikLoginForm