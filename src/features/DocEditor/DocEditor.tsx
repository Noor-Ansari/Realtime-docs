import { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getDocById } from "./service";
import { FAKE_ID } from "../../shared/constants";
import { destroyWorker, initializeWorker, updateDoc } from "./utils";

import { DocEditorContainer, DocEditorTitle, StyledDocEditor } from "./style";

const DocEditor = () => {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const { docId = FAKE_ID } = useParams();

  const getDoc = useCallback(async () => {
    const { doc, error } = await getDocById(docId);
    if (doc) {
      setContent(doc.content);
    } else if (error) {
      setMessage(error);
    }
  }, [docId]);

  useEffect(() => {
    getDoc();
  }, [getDoc]);

  useEffect(() => {
    initializeWorker(docId, setContent);
    return () => destroyWorker();
  }, [docId]);

  const onContentChange = (value: string) => {
    setContent(value);
    updateDoc(docId, value);
  };

  if (message) {
    return <DocEditorTitle>{message}</DocEditorTitle>;
  }

  return (
    <DocEditorContainer>
      <DocEditorTitle>DocEditor</DocEditorTitle>
      <StyledDocEditor value={content} onChange={onContentChange} />
    </DocEditorContainer>
  );
};

export default DocEditor;
