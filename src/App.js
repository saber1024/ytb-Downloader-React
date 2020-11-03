import "./App.css";
import Header from "./Componets/Header";
import HomeScreen from "./Screens/HomeScreen";
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
