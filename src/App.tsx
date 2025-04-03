import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>Form</Container>
      <Container>Footer</Container>
    </>
  );
}
