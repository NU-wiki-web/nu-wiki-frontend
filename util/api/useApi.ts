import { ref } from "vue";
import api, { ApiInstance } from "~/api/$api";/ja-jp/HT212524
import aspida from "@aspida/axios";

interface cbType {
  (): Promise<any>;
}
export const useFetch = async (cb: cbType) => {
  const res = ref();
  const error = ref(null);

  try {
    res.value = await cb();
  } catch (err) {
    error.value = err.message;
    console.error(err.message);
  }

  return { res, error };
};

export const useClient = () => {
  const client = api(aspida());
  return client;
};
