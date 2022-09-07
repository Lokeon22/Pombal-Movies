import { Container } from "./style";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

export function TagButton({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="submit" onClick={onClick}>
        {isNew ? <AiOutlinePlus /> : <AiOutlineClose />}
      </button>
    </Container>
  );
}
