import { Container } from "./style";

import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";

export function Social() {
  return (
    <Container>
      <p>Follow us on social networks:</p>
      <ul>
        <li>
          <a href="http://pombalnews.herokuapp.com" target="_blank">
            <HiOutlineNewspaper />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <AiOutlineInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank">
            <AiOutlineTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank">
            <BsYoutube />
          </a>
        </li>
      </ul>
      <label>
        <p>
          Colaborative Projects: <strong>Pombal News</strong>
        </p>
        <span>Pombal - Todos os direitos reservados a Pombal Corp ®</span>
      </label>
    </Container>
  );
}
