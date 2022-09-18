import * as yup from "yup";

const siginValidation = yup.object().shape({
  userName: yup.string().required("Bu Alani Bos Birakamazsiniz..."),
  password: yup.string().required("Lutfen Sifre Alanini Bos Birakmayiniz..."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], "Sifre Dogrulamasi Gerceklesemedi!!!"),
});

export default siginValidation;
