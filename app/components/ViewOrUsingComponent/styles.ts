import { colorsTheme } from "@config";
import { ViewStyle, TextStyle } from "react-native";

type Styles = {
  containerViewOrUsing: ViewStyle,
  line: ViewStyle,
  textUsing: TextStyle
}

export const style = (colors: ThemeColors): Styles => ({
  containerViewOrUsing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    alignItems: 'center'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: colorsTheme.athensGray,
    flex: 1,
  },
  textUsing: {
    color: colorsTheme.manatee,
    marginHorizontal: 20,

  }
})