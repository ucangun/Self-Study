import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import Container from "./components/styles/ContainerStyle";

function App() {
  const style = {
    responsive: "724px",
    shadow: "0 10px 10px rgba(0,0,0,0.15)",
  };

  return (
    <ThemeProvider theme={style}>
      <Container>
        <Header />
        <Card />
      </Container>
    </ThemeProvider>
  );
}

export default App;
