import { Header } from "./components/UI/Header/Header";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="auth/login" element={<LoginPage />} />
            <Route path="auth/registration" element={< RegistrationPage />} />
            <Route path="profile" element={< ProfilePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

