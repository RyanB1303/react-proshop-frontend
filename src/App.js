import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/HomeScreen";
import "./bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
