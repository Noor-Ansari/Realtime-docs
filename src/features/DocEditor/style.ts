import styled from "styled-components";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

export const DocEditorContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 10% 80%;
`;

export const DocEditorTitle = styled.h1``;

export const StyledDocEditor = styled(ReactQuill)`
  padding: 1rem;
`;
