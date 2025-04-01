import "./styles/global.css";
import "./styles/theme.css";
import { Container } from "./components/Container";
import { Heading } from "./components/heading";

export function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>Menu</Container>
      <Container>Form</Container>
      <Container>Footer</Container>
    </>
  );
}
