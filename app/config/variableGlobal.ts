
const scale = (size: number, fontSize?: number) => {
  if (fontSize) {
    return size * (fontSize / 18);
  }
  size;
};
export const variableGlobal = {
  paddingVerticalGlobal: 10,
  paddingHorizontalGlobal: 15,
  marginTopGlobal: 10,
  marginHorizontalGlobal: 20,
  marginBottomCard: 5,
  marginBottomTitle: 20,
  marginRightCard: 15,
  paddingLeftCard: 15,
  marginVerticalCard: 25,
  fontSizeGlobal: 14,
  borderRadiusCard: 8
}