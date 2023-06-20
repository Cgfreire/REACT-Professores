import styled from "styled-components";
import { FaPen, FaTrash, FaTools } from "react-icons/fa";

export const TableContainer = styled.div`
  width: 90%;
  background: rgba(163, 147, 235, 0.37);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(163, 147, 235, 0.19);
  padding: 5rem;
  position: relative;
  overflow-x: auto;
  height: 100%;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 60rem;
  border-collapse: collapse;
  border-radius: 15px;
`;

export const Thead = styled.thead`
`;

export const Th = styled.th`
  font-size: clamp(1.4rem, 1.6rem, 2.2rem);
  background: #0092ca;
  color: #e6e6e6;
`;
export const Tr = styled.tr`
    background-color: var(--bg-default);
`;

export const Td = styled.td`
  font-size: clamp(1rem, 1.2rem, 1.8rem);
  text-align: center;
  padding: 0.5rem;

  @media only screen and (max-width: 915px){
    padding: 1rem;
    min-width: 20rem;
  }

  input {
    padding: 0.5rem;
    border: 0.1rem solid var(--border-color);
    outline: none;
    background: none;
  }
  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export const EditIcon = styled(FaPen)`
  color: var(--valid-bg);
  margin-right: 2rem;
`;

export const RemoveIcon = styled(FaTrash)`
  color: var(--invalid-bg);
`;
export const ToolsIcon = styled(FaTools)`
  color: #e6e6e6;
`;


export const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 30%;
    height: 30%;
    object-fit: contain;
  }

  h2 {
    font-size: clamp(1.4rem, 1.6rem, 2rem);
    color: var(--label);
    text-align: center;
  }
`;

export const SaveButton = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: var(--valid-bg);
  margin-right: .5rem;
  border-radius: .5rem;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: var(--invalid-bg);
  border-radius: .5rem;
  cursor: pointer;
`;