import { Container } from "./style";

export function Button({ icon: Icon, title, ...res }) {
  return (
    <Container type="button" {...res}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
