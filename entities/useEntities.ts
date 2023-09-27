type Extract<T, U> = T extends U ? T : never; // Tにわたしたunionを型引数Uに合致するもののみ残したunion型を作る
export const useEnJaEntiries = <T>(
  types: Record<Extract<T, string>, string>
) => {
  type enType = Extract<T, string>;
  const en = Object.keys(types) as enType[];
  const ja = Object.values(types);
  const convertEn2Ja = (en: enType) => {
    if (!types[en]) return;
    return types[en];
  };
  const convertJa2En = (ja: string) => {
    if (!Object.values(types).includes(ja)) return;
    return en.find((key) => types[key] === ja);
  };
  const array = Array.from(en, (key) => ({
    en: key,
    ja: types[key]
  }));
  return {
    types,
    array,
    en,
    ja,
    convertEn2Ja,
    convertJa2En
  };
};
