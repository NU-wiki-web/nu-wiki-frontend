import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_2aebqs } from './_exam_id/files';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '');
  const PATH0 = '/exams';
  const PATH1 = '/files';
  const GET = 'GET';

  return {
    _exam_id: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        files: {
          /**
           * @returns ok
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_2aebqs['get']['resBody'], BasicHeaders, Methods_2aebqs['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * @returns ok
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_2aebqs['get']['resBody'], BasicHeaders, Methods_2aebqs['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
