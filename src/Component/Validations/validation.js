import * as yup from 'yup'

const  validation = yup.object().shape({
    userName : yup.string().required(),
    password : yup.string().required(),
});




export default validation;
