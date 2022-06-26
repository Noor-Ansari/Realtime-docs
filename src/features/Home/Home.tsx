import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createDoc } from "./service";

import { Button, HomeCard, HomeContainer, HomeTitle, Input, Text } from "./style";

const Home = () => {
  const [docId, setDocId] = useState("");
  const navigate = useNavigate();

  const onCreateDoc = async () => {
    const { docId, error } = await createDoc();
    if (docId) {
      openDocEditor(docId);
    } else {
      alert(error);
    }
  };

  const onOpenDoc = () => {
    if (docId) {
      openDocEditor(docId);
    } else {
      alert("Please enter doc id");
    }
  };

  const openDocEditor = (docId: string) => {
    navigate(`/doc-editor/${docId}`);
  };

  return (
    <HomeContainer>
      <HomeTitle>Welcome to the Realtime Docs</HomeTitle>
      <HomeCard>
        <Button onClick={onCreateDoc}>Create a new doc</Button>
        <Text>OR</Text>
        <Input
          type="text"
          value={docId}
          onChange={(e) => setDocId(e.target.value)}
          placeholder="Enter doc id..."
        />
        <Button onClick={onOpenDoc}>Open existing one</Button>
      </HomeCard>
    </HomeContainer>
  );
};

export default Home;
