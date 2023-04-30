export const useEnJaEntiries = <T>(types: Record<string, string>) => {
    const en = Object.keys(types) as T[]
    const ja = Object.values(types)
    const convertEn2Ja = (en: string) => {
        if (!types[en]) return
        return types[en]
    }
    const convertJa2En = (ja: string) => {
        if (!Object.values(types).includes(ja)) return
        return Object.keys(types).find(key => types[key] === ja)
    }
    const array = Array.from(Object.keys(types), key => ({
        en: key,
        ja: types[key],
    }))
    return {
        types,
        array,
        en,
        ja,
        convertEn2Ja,
        convertJa2En,
    }
}
