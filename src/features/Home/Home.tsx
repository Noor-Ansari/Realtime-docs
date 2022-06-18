import { useState } from "react";

import {
  Button,
  HomeCard,
  HomeContainer,
  HomeTitle,
  Input,
  Text,
} from "./style";

const Home = () => {
  const [docId, setDocId] = useState("");

  const onCreateDoc = () => {
    // call the create doc service
    // on success navigate to doc editor with doc id
    openDocEditor("");
  };

  const onOpenDoc = () => {
    // navigate to the doc editor with doc id
    openDocEditor(docId);
  };

  const openDocEditor = (docId: string) => {
    // navigate to doc editor with doc id
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
