import axiosInstance from "../../shared/axios";

export const getDocById = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/docs/${id}`);
    return { doc: data.res };
  } catch (err: any) {
    console.log({ err });
    return { error: err.response.data.message || err.message };
  }
};
