import { variableGlobal } from "@config";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { colorsTheme } from "@config";
type Styles = {
  viewImgCoin: ImageStyle,
  viewContainerCard: ViewStyle,
  viewInformationCard: ViewStyle,
  viewCard: ViewStyle,
  viewDesc: ViewStyle,
  button: ViewStyle,
  viewSignalStatus: ViewStyle,
  textHeading: TextStyle,
  textDesc: TextStyle,
  textSignalStatus: TextStyle,
  textLabelStatus: (status: boolean) => TextStyle,
  lineStyles: TextStyle,

}
export const style = (colors: ThemeColors): Styles => ({
  viewImgCoin: {
    flexDirection: 'row'
  },
  viewInformationCard: {
    flex: 1,
    marginLeft: 15
  },
  viewContainerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewCard: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20
  },
  viewDesc: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 50
  },
  viewSignalStatus: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
  },
  textHeading: {
    color: colors.heading,
    fontWeight: '500',
    fontSize: 18
  },
  textDesc: {
    color: colors.textDesc,
    fontSize: variableGlobal.fontSizeGlobal
  },
  textSignalStatus: {
    color: colors.heading,
    fontWeight: '500',
    fontSize: 18
  },
  textLabelStatus: (status) => ({
    color: status ? colorsTheme.mountainMeadow : colorsTheme.red,
    fontWeight: '500',
    fontSize: 16
  }),
  lineStyles: {
    marginTop: 10,
  }
})