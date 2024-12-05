import { Header} from "./components/UI/Header/Header";
import {LoginPage,MainPage,ProfilePage,RegistrationPage } from '@/pages'
import { BrowserRouter as Router, Route, Routes } from "react-router";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/registration" element={< RegistrationPage />} />
            <Route path="/profile" element={< ProfilePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

