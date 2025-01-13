import "./LoginPage.scss";
import { Button } from "../../components/UI"; // избавиться от точек
import { Input } from "../../components/UI";
import { AuthWith } from "../../components";
import { Applink } from "../../components";
import { Heading } from "../../components/Typography";
import * as yup from "yup"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
  useremail: string
  userpassword: string
}

const loginFormschema = yup.object({
  useremail: yup.string().email("Введите почту в правильном формате").required("Обязательное поле"),
  userpassword: yup.string().required("Обязательное поле").min(8, "Минимум 8 символов")
})

export const LoginPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginFormschema), defaultValues: { useremail: "", userpassword: "" }, })
  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data)
  }
  return (
    <div className="LoginPage">
      <Heading text="Авторизация" level={1} className={""} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="useremail" control={control} render={({field}) => (
          <Input isError={errors.useremail ? true : false} errorMessage={errors.useremail?.message} type="text" placeholder="Email"
            {...field}
          />

        )} />
        <Controller name="userpassword" control={control} render={({field}) => (
          <Input isError={errors.userpassword ? true : false} errorMessage={errors.userpassword?.message} type="password" placeholder="Пароль"
            {...field}
          />

        )} />

        <Button text="Войти" type="submit"/>
      </form>
      <Applink to="#" text="Забыли пароль?" className={""} />
      <AuthWith />
    </div>
  );
};
