import { Header} from "./components/UI/Header/Header";
import {LoginPage, MainPage, ProfilePage, RegistrationPage } from '@/pages'
import {HashRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/main" element={<MainPage />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={< RegistrationPage />} />
            <Route path="profile" element={< ProfilePage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

