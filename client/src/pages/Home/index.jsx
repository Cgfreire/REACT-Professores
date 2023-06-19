import { Container, Main, Title, Subtitle } from './styles'
import { FormComponent } from '../../components/form'
import { TableComponent } from '../../components/Table';
import { FooterComponent } from '../../components/Footer';

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