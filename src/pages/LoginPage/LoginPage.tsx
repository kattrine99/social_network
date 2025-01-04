import "./LoginPage.scss";
import { Button } from "../../components/UI"; // избавиться от точек
import { Input } from "../../components/UI";
import { AuthWith } from "../../components";
import { Applink } from "../../components";
import { Heading } from "../../components/Typography";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading text="Авторизация" level={1} className={""} />
      <form action="#">
        <Input type="tel" placeholder="Номер телефона" />
        <Input type="password" placeholder="Пароль" />
        <Button text="Войти" />
      </form>
      <Applink href="#" text="Забыли пароль?" className={""} />
      <AuthWith />
    </div>
  );
};
