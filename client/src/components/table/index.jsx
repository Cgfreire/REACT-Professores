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
    const listadeProfessores =
      JSON.parse(localStorage.getItem("professores")) || [];
    setTableData(listadeProfessores);
  };

  useEffect(() => {
    getProfessores();
  }, []);

  const handleEdit = (professorid) => {
    setEditingId(professorid);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedData({});
  };

  const handleSaveEdit = (professorid) => {
    const professoresEditado = tableData.find(
      (professor) => professor.id === professorid
    );

    professoresEditado.nome =
      editedData[professorid]?.nome !== undefined
        ? editedData[professorid]?.nome
        : professoresEditado.nome;
    professoresEditado.matricula =
      editedData[professorid]?.matricula !== undefined
        ? editedData[professorid]?.matricula
        : professoresEditado.matricula;
    professoresEditado.materia =
      editedData[professorid]?.materia !== undefined
        ? editedData[professorid]?.materia
        : professoresEditado.materia;
    localStorage.setItem("professores", JSON.stringify(tableData));
    setEditingId(null);
    setEditedData({});
  };

  const handleRemove = (event) => {
    const trElement = event.target.closest("tr");
    const professorid = trElement.getAttribute("data-id");
    trElement.remove();
    const listadeProfessores =
      JSON.parse(localStorage.getItem("professores")) || [];
    const updatedlistadeProfessores = listadeProfessores.filter(
      (professor) => professor.id !== professorid
    );
    localStorage.setItem(
      "professores",
      JSON.stringify(updatedlistadeProfessores)
    );
  };

  const handleFieldChange = (professorid, field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [professorid]: {
        ...prevData[professorid],
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