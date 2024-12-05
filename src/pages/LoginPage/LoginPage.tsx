import { Button, Input, LinksList } from "@/components";
import { Outlet } from "react-router";

import "./LoginPage.scss";


export const LoginPage = () => {
  return (
    <>
      <div className="LoginPage">
        <h1>Авторизация</h1>
        <form action="#">
          <Input type="tel" placeholder="Номер телефона" />
          <Input type="password" placeholder="Пароль" />
          <Button>Login</Button>
        </form>
        <a href="#">Забыли пароль?</a>
        <div className="registration">
          <span>
            У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
          </span>
          <p>Войти с помощью</p>
          <div className="icons-wrapper">
            <LinksList tabIndex={4} />
          </div>
        </div>
        <Outlet />
      </div>   
    </>

  );
};
