import * as yup from "yup";

export const schemaCadastro = yup.object().shape({
  userName: yup.string().required("O Nome de Usuário é obrigatório"),
  firstname: yup.string().required("O primeiro nome é obrigatório"),
  lastname: yup.string().required("O segundo nome é obrigatório"),
  email: yup
    .string()
    .email("O email é inválido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 dígitos")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial."
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não são iguais")
    .required("Confirmação de senha obrigatória"),
  city: yup.string().required("A Cidade é obrigatório"),
  street: yup.string().required("A Rua nome é obrigatório"),
  number: yup
    .number()
    .typeError("Deve ser só números")
    .required("O número da residência é obrigatório"),
  zipcode: yup
    .number()
    .typeError("Deve ser só números")
    .required("O Cep é obrigatório"),
  phone: yup
    .number()
    .typeError("Deve ser só números")
    .required("O telefone é obrigatório"),
});
