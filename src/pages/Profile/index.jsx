import { useState } from "react";
import { Container, Inputs, Avatar } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiFillLock,
  AiOutlineCamera,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatardefault.png";
import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";

export function Profile() {
  const { user, updateProfiles } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [actualPassword, setActualPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl); // Responsavel por renderizar o avatar
  const [avatarFile, setAvatarFile] = useState(null); // Novo avatar do usuario

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview); // Estado renderizando a imagem e mandando para o avatar de url={avatar}
  }

  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: newPassword,
      oldpassword: actualPassword,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfiles({ user: userUpdated, avatarFile });
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <AiOutlineArrowLeft />
          Voltar
        </Link>
      </header>

      <main>
        <Avatar>
          <img src={avatar} />

          <label htmlFor="avatar">
            <AiOutlineCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Inputs>
          <Input
            type="text"
            value={name}
            icon={AiOutlineUser}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            value={email}
            icon={AiOutlineMail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha atual"
            icon={AiFillLock}
            onChange={(e) => setActualPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Nova senha"
            icon={AiFillLock}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button title="Salvar" onClick={handleUpdateProfile} />
        </Inputs>
      </main>
    </Container>
  );
}
