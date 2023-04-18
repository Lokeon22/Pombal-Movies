import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({}); // Guarda nosso user / Objeto vazio pois receberá propriedades

  async function loginPombal({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data; // Trazendo do banco o name, email, password, avatar e token do usuario
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("@pombalmovies:key", JSON.stringify(user));
      localStorage.setItem("@pombalmovies:token", token);

      setData({ user, token });
    } catch (error) {
      if (error.message) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível conectar");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@pombalmovies:token");
    const user = localStorage.getItem("@pombalmovies:key");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`; // inserindo o token no header de cada requisição
      setData({
        // armazenando nosso estado do usuario, sendo assim, toda vez que executar o useEffect ele atualiza o estado do setData
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  async function logoutPombal() {
    localStorage.removeItem("@pombalmovies:token");
    localStorage.removeItem("@pombalmovies:key");

    setData({});
  }

  async function updateProfiles({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@pombalmovies:key", JSON.stringify(user)); //Atualizando o usuario no localstorage
      setData({ user, token: data.token }); // Set data atualizando o usuario, precisa passar o token dessa forma pois está pegando o data.token de dentro do nosso estado / ou seja, ja estou pegando o token que está armazenado anteriormente

      alert("Perfil atualizado");
    } catch (error) {
      if (error.message) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível conectar");
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{ loginPombal, updateProfiles, logoutPombal, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
