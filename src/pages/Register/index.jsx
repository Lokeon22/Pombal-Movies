import { Container, Grid, Background } from "./style";

import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { AiOutlineMail, AiFillLock, AiOutlineUser } from "react-icons/ai";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSingUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <Grid>
        <form>
          <h1>PombalMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>

          <h2>Crie sua conta</h2>
          <Input
            type="text"
            placeholder="Nome"
            icon={AiOutlineUser}
            onChange={(e) => setName(e.target.value)}
          />

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
          <Button title="Cadastrar" onClick={handleSingUp} />
          <ButtonText title="Volte para o login" to="/" />
        </form>

        <Background />
      </Grid>
    </Container>
  );
}
