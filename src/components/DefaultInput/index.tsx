import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string /* Para exigir que tenha labelText, retira ? e as condições */;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* Se tiver (&&) labelText faça label */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
