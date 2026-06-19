import Header from "./components/Header";
import Global from "./styles/Global";
// import Banner from "./components/Banner";
// import Home from "./pages/Home";
import Footer from "./components/Footer";
// import Imobi from "./pages/Imobi";
// import Login from "./pages/Login";
// import Cadastro from "./pages/Cadastro";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Header />
      <Error />
      {/* <Cadastro /> */}
      {/* <Login /> */}
      {/* <Imobi /> */}
      {/* <Banner />
      <Home /> */}
      <Footer />
      <Global />
    </div>
  );
}

export default App;
