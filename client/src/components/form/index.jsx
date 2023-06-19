import { FormContainer, Form, InputArea, Button } from "./styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FormComponent = () => {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [materia, setMateria] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const listadeProfessores = JSON.parse(localStorage.getItem("professores")) || [];

    const professores = {
      id: uuidv4().slice(0,5),
      nome: nome,
      matricula: matricula,
      materia: materia,
    };

    listadeProfessores.push(professores);
    localStorage.setItem("professores", JSON.stringify(listadeProfessores));

    setNome("");
    setMatricula("");
    setMateria("");

    window.location.reload()
  };
  
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputArea>
          <label nome="nome" htmlFor="nome">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Nome do Professor"
            minLength={1}
            maxLength={50}
            required
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </InputArea>
        <InputArea>
          <label nome="Matricula" htmlFor="matricula">
            Matrícula
          </label>
          <input
            type="text"
            id="matricula"
            placeholder="Matricula do Professor"
            minLength={1}
            maxLength={5}
            required
            value={matricula}
            onChange={(event) => setMatricula(event.target.value)}
          />
        </InputArea>
        <InputArea>
          <label nome="materia" htmlFor="materia">
            Matéria
          </label>
          <input
            type="text"
            id="materia"
            placeholder="Matéria do Professor"
            minLength={1}
            maxLength={50}
            required
            value={materia}
            onChange={(event) => setMateria(event.target.value)}
          />
        </InputArea>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
  );
};