import { Container, Content, Form, Tags, SectionStar } from "./style";

import avatarPlaceholder from "../../assets/avatardefault.png";

import { Rating } from "../../components/Ratings";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { TitleStar } from "../../components/TitleStar";
import { Button } from "../../components/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Annotations() {
  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function showNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    showNote();
  }, []);

  const navigate = useNavigate();

  async function deleteNote() {
    const confirm = window.confirm("Deseja excluir?");
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    } else {
      return;
    }
  }

  return (
    <Container>
      <Header />
      {data && (
        <Content>
          <Link to="/">
            <AiOutlineArrowLeft />
            Voltar
          </Link>

          <SectionStar>
            <TitleStar title={data.title} />
            <Rating rating={data.rating} />
          </SectionStar>

          <Form>
            <img src={avatarUrl} />
            <span>{user.name}</span>
            <BiTime size={20} />
            <span>{data.created_at}</span>
          </Form>

          <Tags>
            {data.tags.map((tag) => (
              <Tag key={tag.id} title={tag.name} />
            ))}
          </Tags>
          <p>{data.description}</p>
          <Button title="Excluir nota" onClick={deleteNote} />
        </Content>
      )}
    </Container>
  );
}
