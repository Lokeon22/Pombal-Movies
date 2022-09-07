import { Container } from "./style";
import { AiOutlineStar } from "react-icons/ai";

export function TitleStar({ title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <AiOutlineStar size={20} />
      <AiOutlineStar size={20} />
      <AiOutlineStar size={20} />
      <AiOutlineStar size={20} />
      <AiOutlineStar size={20} />
    </Container>
  );
}
