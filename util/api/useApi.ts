import { ref } from "vue";
import api, { ApiInstance } from "~/api/$api";
import aspida from "@aspida/axios";

interface cbType {
  (): Promise<any>;
}
export const useAwait = async (cb: cbType) => {
  const res = ref();
  const error = ref(null);
  const loading = ref(true);

  try {
    res.value = await cb();
    loading.value = false;
  } catch (err) {
    error.value = err.message;
    console.error(err.message);
  }

  return { res, error, loading };
};

export const useClient = () => {
  const client = api(aspida());
  return client;
};

export const apiClient = api(aspida());
