import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/hooks";
import { createUsersThunk } from "../../app/reducers/registration/thunks"
import { schemaCadastro } from "./schema";
import { Input } from "./input"

const AuxiliaryNewUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaCadastro) });

   function fixData(data: FieldValues) {
    return {
      email: data.email,
      username: data.userName,
      password: data.password,
      name: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
      address: {
        city: data.city,
        street: data.street,
        number: data.number,
        zipcode: data.zipcode.toString(),
        geolocation: {
          lat: "0",
          long: "0",
        },
      },
      phone: data.phone.toString(),
    };
  }
  const dispatch = useAppDispatch();
  const onSubmitFunction = async (data: FieldValues) => {
    const dataFixed = fixData(data);
    await dispatch(createUsersThunk(dataFixed));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
      <Input
          name="userName"
          type="text"
          label="Nome de Usuário"
          placeholder="Crie aqui seu Nome de Usuário"
          register={register}
          error={errors.userName?.message}
        ></Input>
        <Input
          name="firstname"
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          register={register}
          error={errors.firstname?.message}
        ></Input>
        <Input
          name="lastname"
          label="Sobrenome"
          type="text"
          placeholder="Digite aqui seu sobrenome"
          register={register}
          error={errors.lastname?.message}
        ></Input>
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="Didite aqui seu email"
          register={register}
          error={errors.email?.message}
        ></Input>
        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="Didite aqui sua senha"
          register={register}
          error={errors.password?.message}
        ></Input>
        <Input
          name="passwordConfirm"
          label="Confirme sua Senha"
          type="password"
          placeholder="Confirme sua nova senha"
          register={register}
          error={errors.passwordConfirm?.message}
        ></Input>
        <h3>Endereço</h3>
        <Input
          name="city"
          label="Cidade"
          type="text"
          placeholder="Didite aqui sua Cidade"
          register={register}
          error={errors.city?.message}
        ></Input>
        <Input
          name="street"
          label="Rua"
          type="text"
          placeholder="Didite a/ou Rua/lougradouro"
          register={register}
          error={errors.street?.message}
        ></Input>
        <Input
          name="number"
          label="Numero"
          type="number"
          min="0"
          placeholder="Numero da sua Residência"
          register={register}
          error={errors.number?.message}
        ></Input>
        <Input
          name="zipcode"
          label="CEP"
          type="text"
          maxLength={8}
          placeholder="Didite aqui seu CEP"
          register={register}
          error={errors.zipcode?.message}
        ></Input>
        <Input
          name="phone"
          label="Telefone"
          type="text"
          maxLength={12}
          placeholder="Didite aqui sua Telefone"
          register={register}
          error={errors.phone?.message}
        ></Input>
        <span></span>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AuxiliaryNewUser;
