// https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)

export const guidGenerator = (): string => `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
