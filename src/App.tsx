import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { InputDefault } from "./components/InputDefault";

export function App() {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <InputDefault id="input" type="text" />
          </div>

          <div className="formRow">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
          </div>

          <div className="formRow">
            <span>Ciclos</span>
            <span>O O O O O</span>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
      <Container>Footer</Container>
    </>
  );
}
