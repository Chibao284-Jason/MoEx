import { ViewStyle } from "react-native";
type Styles = {
  container: ViewStyle
}
export const style = (colors: ThemeColors): Styles => ({
  container: {
    width: '100%',
    height: 10,
    backgroundColor: colors.line
  }
})