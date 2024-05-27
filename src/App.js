import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Intro from "./components/introduction";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
