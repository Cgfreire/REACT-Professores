import { Container, Main, Title, Subtitle } from './styles'
import { FormComponent } from '../../components/form'
import { TableComponent } from '../../components/table';
import { FooterComponent } from '../../components/footer';


export const Home = () => {
  return (
    <Container>
      <Main>
        <Title>SISTEMA DE CADASTRO UNISALES</Title>
        <Subtitle>PROFESSORES</Subtitle>
        <FormComponent />
        <TableComponent />
        <FooterComponent/>
      </Main>
    </Container>
  );
}