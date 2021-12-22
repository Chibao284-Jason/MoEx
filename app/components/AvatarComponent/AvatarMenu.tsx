import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useTheme} from 'react-native-paper';
import {style} from './styles';

interface AvatarMenuProps {}

const AvatarMenu = (props: AvatarMenuProps) => {
  const {colors} = useTheme();
  const styles = style(colors as ThemeColors);
  return (
    <View style={styles.containerAvatar}>
      <Avatar
        rounded
        size="large"
        source={{
          uri: 'https://lh3.googleusercontent.com/a/AATXAJw2HlIS3N7WlWuVXLqbVHkqpOwiuz409XxZO506=s96-c',
        }}
      />
      <View style={styles.viewUserName}>
        <Text style={styles.textUserName}>Bảo Nguyễn Chí</Text>
        <Text style={styles.textDesc}>Chưa KYC</Text>
      </View>
    </View>
  );
};

export default AvatarMenu;
