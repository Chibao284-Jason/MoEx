
const scale = (size: number, fontSize?: number) => {
  if (fontSize) {
    return size * (fontSize / 18);
  }
  size;
};
export const variableGlobal = {
  paddingVerticalGlobal: 10,
  paddingHorizontalGlobal: 10,
  marginTopGlobal: 10,
  marginHorizontalGlobal: 20,
  fontSizeGlobal: 14
}