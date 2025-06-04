import MainTemplate from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { GenericHTML } from "../../components/GenericHTML";
import { Heading } from "../../components/Heading";

export default function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHTML>
          <Heading>404 - Página não encontrada</Heading>
          <p>
            Ops! Parece que a página que você está tentando acessar não existe.
            Talvez ela tenha se perdido em algum lugar de um buraco negro.
          </p>
          <p>
            Mas calma, você não está perdido no espaço (ainda). Dá para voltar
            com segurança para a <a href="/">página principal</a> ou fingir que
            achou uma página secreta que só os exploradores mais incríveis
            conseguem acessar.
          </p>
        </GenericHTML>
      </Container>
    </MainTemplate>
  );
}
