import { colorsTheme } from "@config";
import { ViewStyle, TextStyle } from "react-native";
type Styles = {
  containerPresenter: ViewStyle
  searchContainer: ViewStyle
  viewBody: ViewStyle
  viewButton: ViewStyle
  input: TextStyle
  label: TextStyle
  touchButton: (active?: string | '') => ViewStyle
}

export const style = (colors: ThemeColors): Styles => ({
  containerPresenter: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal
  },
  viewBody: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  searchContainer: {
    height: 40,
    backgroundColor: colors.backgroundItem,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 10,
    borderColor: colors.borderColorCard,
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 14,
    flex: 1,
    color: colors.textTitleMenu,
    paddingVertical: 5
  },
  label: {
    color: colors.textTitleMenu,
    fontSize: 14,
  },
  viewButton: {
    marginBottom: 30,
  },
  touchButton: (active) => ({
    backgroundColor: active === '' ? colorsTheme.cornflowerBlue : colors.backgroundButton
  })
})