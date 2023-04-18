import { Container, Grid, Background } from "./style";

import { useState } from "react";

import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Social } from "../../components/Social";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginPombal } = useAuth(); //Usa nosso contexto pegando a função loginPombal que conecta no nosso banco

  function handleLoginPombal() {
    loginPombal({ email, password });
  }

  return (
    <Container>
      <Grid>
        <form>
          <h1>PombalMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>

          <h2>Faça seu login</h2>
          <Input
            type="text"
            placeholder="E-mail"
            icon={AiOutlineMail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={AiFillLock}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Entrar" onClick={handleLoginPombal} />
          <ButtonText title="Criar conta" to="/register" />
          <Social />
        </form>
        <Background />
      </Grid>
    </Container>
  );
}
