import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import  toast  from 'react-hot-toast';
import { IauxiliaryUpdateUser } from "../../interfaces/User.interface";
import { result } from "../../helpers/requestUpdateUser";
import { schemaCadastro } from "./schema";
import { Input } from "./input"

const AuxiliaryUpdateUser: React.FC<IauxiliaryUpdateUser> = (props: IauxiliaryUpdateUser) => {
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
  
  const onSubmitFunction = async (data: FieldValues) => {
    const dataFixed = fixData(data);
    (props.props.id) && await result(props.props.id, dataFixed).then(() => {
        reset();
        toast.success("Edição realizada com sucesso!");
      })
      .catch(() => toast.error("Edição não foi realizada!"));
  };

  useEffect(() => {
    let defaultValues: any = {};
    defaultValues.userName = props.props.username;
    defaultValues.firstname = props.props.name.firstname;
    defaultValues.lastname = props.props.name.lastname;
    defaultValues.email = props.props.email;
    defaultValues.city = props.props.address.city;
    defaultValues.street = props.props.address.street;
    defaultValues.number = props.props.address.number;
    defaultValues.zipcode = props.props.address.zipcode;
    defaultValues.phone = props.props.phone;

    reset({ ...defaultValues });
  }, [reset, props]);

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
          placeholder="Didite aqui seu nome"
          register={register}
          error={errors.firstname?.message}
        ></Input>
        <Input
          name="lastname"
          label="Sobrenome"
          type="text"
          placeholder="Didite aqui seu sobrenome"
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
          placeholder="Digite aqui sua nova senha"
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
          placeholder="Didite aqui seu CEP"
          register={register}
          error={errors.zipcode?.message}
        ></Input>
        <Input
          name="phone"
          label="Telefone"
          type="text"
          placeholder="Didite aqui sua Telefone"
          register={register}
          error={errors.phone?.message}
        ></Input>
        <span></span>
        <button type="submit">Editar Usuário</button>
      </form>
    </div>
  );
};

export default AuxiliaryUpdateUser;
