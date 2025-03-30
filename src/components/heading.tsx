import style from "./heading.module.css";

export function Heading(props) {
  return <h1 className={style.heading}>{props.children}</h1>;
}
