import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Category } from "./components/Category";
import { About } from "./components/About";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Recipe } from "./components/Recipe";
import { Categorysub } from "./components/Categorysub";
import { Profile } from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:category" element={<Category />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/categorysub/:category" element={<Categorysub />}></Route>
        {/* <Route path="/categorysub" element={<Categorysub />}></Route> */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/recipe/:name" element={<Recipe />}></Route>
        <Route path="/profile/:Email" element={<Profile />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
