import { Header} from "./components/UI/Header/Header";
import {LoginPage, MainPage, ProfilePage, RegistrationPage } from '@/pages'
import {BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={< RegistrationPage />} />
            <Route path="profile" element={< ProfilePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

