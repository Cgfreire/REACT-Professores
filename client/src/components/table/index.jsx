import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  NotFoundContainer,
  EditIcon,
  RemoveIcon,
  ToolsIcon,
  CancelButton,
  SaveButton,
} from "./styles";

export const TableComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const getProfessores = () => {
    const listaDeProfessores =
      JSON.parse(localStorage.getItem("professores")) || [];
    setTableData(listaDeProfessores);
  };

  useEffect(() => {
    getProfessores();
  }, []);

  const handleEdit = (professorId) => {
    setEditingId(professorId);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedData({});
  };

  const handleSaveEdit = (professorId) => {
    const professoreEditado = tableData.find(
      (professor) => professor.id === professorId
    );

    professoreEditado.nome =
      editedData[professorId]?.nome !== undefined
        ? editedData[professorId]?.nome
        : professoreEditado.nome;
    professoreEditado.matricula =
      editedData[professorId]?.matricula !== undefined
        ? editedData[professorId]?.matricula
        : professoreEditado.matricula;
    professoreEditado.materia =
      editedData[professorId]?.materia !== undefined
        ? editedData[professorId]?.materia
        : professoreEditado.materia;
    localStorage.setItem("professores", JSON.stringify(tableData));
    setEditingId(null);
    setEditedData({});
  };

  const handleRemove = (event) => {
    const trElement = event.target.closest("tr");
    const professorId = trElement.getAttribute("data-id");
    trElement.remove();
    const listaDeProfessores =
      JSON.parse(localStorage.getItem("professores")) || [];
    const updatedlistaDeProfessores = listaDeProfessores.filter(
      (professor) => professor.id !== professorId
    );
    localStorage.setItem(
      "professores",
      JSON.stringify(updatedlistaDeProfessores)
    );
  };

  const handleFieldChange = (professorId, field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [professorId]: {
        ...prevData[professorId],
        [field]: value === "" ? null : value,
      },
    }));
  };

  return (
    <TableContainer>
      <Table>
        {tableData.length > 0 ? (
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Mátricula</Th>
              <Th>Máteria</Th>
              <Th>
                <ToolsIcon />
              </Th>
            </Tr>
          </Thead>
        ) : null}
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((professor) => (
              <Tr key={professor.id} data-id={professor.id}>
                <Td>{professor.id}</Td>
                <Td>
                  {editingId === professor.id ? (
                    <input
                      type="text"
                      value={
                        editedData[professor.id]?.nome !== undefined
                          ? editedData[professor.id]?.nome
                          : professor.nome
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          professor.id,
                          "nome",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    professor.nome || ""
                  )}
                </Td>
                <Td>
                  {editingId === professor.id ? (
                    <input
                      type="text"
                      value={
                        editedData[professor.id]?.matricula !== undefined
                          ? editedData[professor.id]?.matricula
                          : professor.matricula
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          professor.id,
                          "matricula",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    professor.matricula || ""
                  )}
                </Td>
                <Td>
                  {editingId === professor.id ? (
                    <input
                      type="text"
                      value={
                        editedData[professor.id]?.materia !== undefined
                          ? editedData[professor.id]?.materia
                          : professor.materia
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          professor.id,
                          "materia",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    professor.materia || ""
                  )}
                </Td>
                <Td>
                  {editingId === professor.id ? (
                    <>
                      <SaveButton onClick={() => handleSaveEdit(professor.id)}>
                        Salvar
                      </SaveButton>
                      <CancelButton onClick={handleCancelEdit}>
                        Cancelar
                      </CancelButton>
                    </>
                  ) : (
                    <>
                      <EditIcon onClick={() => handleEdit(professor.id)} />
                      <RemoveIcon onClick={(event) => handleRemove(event)} />
                    </>
                  )}
                </Td>
              </Tr>
            ))
          ) : (
            <NotFoundContainer>
              
              <h2>Nenhum dado encontrado.</h2>
            </NotFoundContainer>
          )}
        </tbody>
      </Table>
    </TableContainer>
  );
};