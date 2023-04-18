import { Container, Form, Label } from "./style";

import { FiLogOut } from "react-icons/fi";
import avatarPlaceholder from "../../assets/avatardefault.png";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { user, logoutPombal } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Form>
        <h1>PombalMovies</h1>
        <Label to="/profile">
          <div>
            <span>Bem vindo,</span>
            <p>{user.name}</p>
          </div>
          <img src={avatarUrl} />
        </Label>
        <FiLogOut size={23} onClick={logoutPombal} />
      </Form>
    </Container>
  );
}
