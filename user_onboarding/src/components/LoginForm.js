import React, {useState} from 'react'
import axios from 'axios'
import defaultImage from '../assets/images/defaultImage.png'
import {Form as FormikForm , Field , withFormik} from 'formik'
import * as Yup from 'yup'


const LoginForm = ( values , props) => {

    const {setPeople} = props

    return(
        <FormikForm >

            <Field type = 'text' placeholder = 'Name' name = 'name'  />

            <Field type = 'email' placeholder = 'Email' name = 'email'  />

            <Field type = 'password' placeholder = 'Password' name = 'password'  />

            <label for = 'file'>Upload Image
            <Field type = 'file' name = 'file' value = {values.file}/>
            </label>

            <label>
                <Field type = 'checkbox' name = 'terms'  value = {values.terms}/>
                I have read and agree to the Terms of Service
            </label>

            <button type = 'submit'>Submit</button>
        
        </FormikForm>
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