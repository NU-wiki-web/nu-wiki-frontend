import { ref } from "vue";
import api, { ApiInstance } from "~/api/$api";
import aspida from "@aspida/axios";
import axios, { AxiosRequestConfig } from "axios";

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
  const runtimeConfig = useRuntimeConfig();
  const config: AxiosRequestConfig = {
    withCredentials: true,
    baseURL: runtimeConfig.public.apiUrl
  };
  console.log(runtimeConfig.public.apiUrl);
  const client = api(aspida(axios, config));
  return client;
};
