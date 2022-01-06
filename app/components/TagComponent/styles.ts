import { colorsTheme } from "@config";
import { IThemeState } from "@models/reducers/theme";
import { ViewStyle, TextStyle } from "react-native";
import { useSelector } from "react-redux";

interface IState {
  themeReducer: IThemeState;
}
type Styles = {
  viewFilter: (activeTag: boolean) => ViewStyle
  textFilter: (activeTag: boolean) => TextStyle
}

export const style = (colors: ThemeColors): Styles => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  console.log(isDark);

  return ({

    viewFilter: activeTag => ({
      padding: 8,
      borderRadius: 5,
      marginRight: 10,
      marginTop: 10,
      backgroundColor: !activeTag ? colors.backgroundLogOutButton : isDark ? colorsTheme.royalBlue : colorsTheme.ebonyClay,
      marginLeft: 5
    }),
    textFilter: activeTag => ({
      fontSize: 16,
      color: !activeTag ? colors.textTagFilter : 'white',
      fontWeight: '600'
    }),
  })
}
