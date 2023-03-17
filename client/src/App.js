import "./App.css";
import Post from "./components/DetailsCard";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./contexts/UserContext";
import AddTransaction from "./pages/AddTransaction";
import IntroPage from "./pages/IntroPage";
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path= "/homepage" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path ="/create" element = {<AddTransaction/>}></Route> 
          <Route index element = {<IntroPage />}></Route>
          <Route path = "/intro" element = {<IntroPage/>}></Route>
          </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
