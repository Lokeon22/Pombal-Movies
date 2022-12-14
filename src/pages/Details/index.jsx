import { Container, Content } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { NoNotes } from "../../components/NoNotes";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  function handleNavigate() {
    navigate("/new");
  }

  function handleNavigateDetails(id) {
    navigate(`/annotations/${id}`);
  }

  return (
    <Container>
      <Header />
      <main>
        <label className="formobile">
          <h1>Meus filmes</h1>
          <Input
            type="text"
            placeholder="Pesquiser um titulo"
            onChange={(e) => setSearch(e.target.value)}
            icon={AiOutlineSearch}
          />
          <Button
            title="Adicionar filme"
            icon={CgMathPlus}
            onClick={handleNavigate}
          />
        </label>

        <Content>
          {notes.length > 0 ? (
            notes.map((note) => (
              <Note
                key={note.id}
                data={note}
                onClick={() => handleNavigateDetails(note.id)}
              />
            ))
          ) : (
            <NoNotes />
          )}
        </Content>
      </main>
    </Container>
  );
}
