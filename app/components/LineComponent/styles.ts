import { ViewStyle } from "react-native";
type Styles = {
  container: (sizeLine?: number, width?: string | number) => ViewStyle
}
export const style = (colors: ThemeColors): Styles => ({
  container: (sizeLine, width) => ({
    width: width ? width : '100%',
    height: sizeLine ? sizeLine : 10,
    backgroundColor: colors.line
  })
})