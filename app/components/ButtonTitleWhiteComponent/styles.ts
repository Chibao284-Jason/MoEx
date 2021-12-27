import { ViewStyle, TextStyle } from "react-native";
type Styles = {
  viewLogOut: ViewStyle
  buttonLogOut: ViewStyle
  textLogout: TextStyle
}
export const style = (colors: ThemeColors): Styles => ({
  viewLogOut: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogOut: {
    backgroundColor: colors.backgroundLogOutButton,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: 'row'
  },
  textLogout: {
    color: colors.heading,
    fontSize: 14,
    fontWeight: '600', marginLeft: 5
  },
})