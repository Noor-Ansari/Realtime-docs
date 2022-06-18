import axios from "axios";

export const createDoc = async () => {
  try {
    const { data } = await axios.post("/doc");
    console.log({ data });
  } catch (error) {
    console.log({ error });
  }
};
