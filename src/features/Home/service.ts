import axiosInstance from "../../shared/axios";

export const createDoc = async () => {
  try {
    const { data } = await axiosInstance.post("/docs");
    return { docId: data.res };
  } catch (err) {
    return { error: err };
  }
};
