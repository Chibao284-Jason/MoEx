import { colorsTheme, variableGlobal } from "@config";
import { ViewStyle, TextStyle } from "react-native";
type Styles = {
  containerFilter: ViewStyle
  viewStatus: ViewStyle
  textStatus: TextStyle
  viewStatusError: ViewStyle
  viewInput: ViewStyle
  viewInputSubmit: ViewStyle
  textStatusError: TextStyle
  textLabel: TextStyle
  titleFilter: TextStyle
}

export const style = (colors: ThemeColors): Styles => ({
  containerFilter: {
    paddingHorizontal: variableGlobal.paddingHorizontalGlobal
  },
  viewStatus: {
    backgroundColor: colors.backgroundStatusHistory,
    borderRadius: 5,
    marginRight: 15,
  },
  textStatus: {
    color: colorsTheme.mountainMeadow,
    marginHorizontal: 15,
    marginVertical: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  viewStatusError: {
    backgroundColor: '#FEEEEF',
    borderRadius: 5,
    marginRight: 15,
  },
  textStatusError: {
    color: '#D36674',
    marginHorizontal: 15,
    marginVertical: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  textLabel: {
    color: colors.heading,
    marginBottom: 15,
    fontSize: 16
  },
  viewInput: {
    marginBottom: 25,
  },
  viewInputSubmit: {
    marginBottom: 20,
    flexDirection: 'row'

  },
  titleFilter: {
    fontWeight: '600',
    fontSize: 22,
    color: colors.heading
  }
})
