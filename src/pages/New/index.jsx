import { Container, Content, Inputs, TagsButtons, FinalButtons } from "./style";
import { Header } from "../../components/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { TagButton } from "../../components/TagButton";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function New() {
  const [name, setName] = useState([]);
  const [newNames, setNewNames] = useState("");

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleTags() {
    if (newNames.length === 0) {
      alert("Preencha para adicionar");
      return;
    }
    setName((prevState) => [...prevState, newNames]);
    setNewNames("");
  }

  function deleteTags(deleted) {
    const confirm = window.confirm("Deseja excluir?");
    if (confirm) {
      setName((prevState) => prevState.filter((link) => link !== deleted));
    } else {
      return;
    }
  }

  async function createNote() {
    if (!title) {
      alert("Insira um título");
      return;
    }

    if (!rating) {
      alert("Insira uma nota de 1 a 5");
      return;
    }

    if (rating > 5) {
      alert("Nota não pode ser maior que 5");
      return;
    }

    const response = await api.post("/notes", {
      title,
      description,
      name,
      rating,
    });
    alert("Nota criada com sucesso");
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <AiOutlineArrowLeft />
          Voltar
        </Link>
        <h1>Novo filme</h1>
        <Inputs>
          <Input
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            type="Number"
            placeholder="Nota de (1 a 5)"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            maxLength="1"
            min="1"
            max="5"
          />
        </Inputs>
        <Textarea
          placeholder="Observações"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h2>Marcadores</h2>

        <TagsButtons>
          {name &&
            name.map((names, index) => (
              <TagButton
                key={index}
                value={names}
                onClick={() => deleteTags(names)}
              />
            ))}
          <TagButton
            placeholder="Novo marcador"
            isNew
            value={newNames}
            onChange={(e) => setNewNames(e.target.value)}
            onClick={handleTags}
          />
        </TagsButtons>

        <FinalButtons>
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" onClick={createNote} />
        </FinalButtons>
      </Content>
    </Container>
  );
}
