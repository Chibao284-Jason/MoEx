import { colorsTheme } from "@config";
import { ViewStyle, TextStyle } from "react-native";

type Styles = {
  centeredView: ViewStyle
  centeredViewModal: ViewStyle
  modalView: ViewStyle
  button: ViewStyle
  buttonOpen: ViewStyle
  textStyle: TextStyle
  modalText: TextStyle
  modalTextDesc: TextStyle
}

export const style = (colors: ThemeColors): Styles => ({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centeredViewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colorsTheme.whisper,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  textStyle: {
    color: colors.heading,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10
  },
  modalText: {
    color: colors.heading,
    fontSize: 16,
    fontWeight: '700',
    textAlign: "center",
  },
  modalTextDesc: {
    marginVertical: 15,
    color: colors.textDesc,
    fontSize: 14,
    textAlign: "center",
  },
})