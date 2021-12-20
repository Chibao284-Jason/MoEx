import { ViewStyle, TextStyle } from "react-native";
type Styles = {
  container: ViewStyle
  textTitle: TextStyle
  textSubtitle: TextStyle
  viewSubTitle: ViewStyle
}
export const style = (colors: ThemeColors): Styles => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  viewSubTitle: {},
  textTitle: {
    color: colors.heading,
    fontSize: 18,
    fontWeight: '700'
  },
  textSubtitle: {}
})