import "./App.css";
import AppSearchBar from "./Componets/AppSearchBar";

import { Header } from "./Componets";
import { HomeScreen } from "./Screens";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Route path="/" exact component={HomeScreen} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
