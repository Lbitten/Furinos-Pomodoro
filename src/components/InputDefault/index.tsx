import styles from "./styles.module.css";

type InputDefaultProps = {
  id: string;
  label?: string;
} & React.ComponentProps<"input">;

export function InputDefault({ id, type, label, ...rest }: InputDefaultProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}{" "}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
