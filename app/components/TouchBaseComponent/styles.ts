import { colorsTheme } from '@config'
import { ViewStyle, TextStyle } from 'react-native'
type Styles = {
  containerTouch: ViewStyle
  touchBase: ViewStyle
  titleBase: (active: boolean) => TextStyle
}
export const style = (colors: ThemeColors): Styles => ({
  containerTouch: {
    flexDirection: 'row',

  },
  touchBase: {
    alignItems: 'flex-end',
    marginLeft: 5
  },
  titleBase: (active) => ({
    color: active ? colors.textViewAll : colorsTheme.manatee,
    fontWeight: '700'
  })
})