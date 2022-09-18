import * as yup from 'yup'

const  inputValidation = yup.object().shape({
    inputValue : yup.string().min(3 , 'Minimum 3 karakter giriniz... ').required('Bu alan bos birakilamaz!!!'),
});




export default inputValidation;
