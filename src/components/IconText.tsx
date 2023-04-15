import { Text, View, Style, StyleSheet } from '../react-pdf';
import THEME from '../theme';
import { Icon, TIconName } from './Icon';

export interface IIconText {
  style?: Style;
  text: string;
  iconName: TIconName;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Rajdhani',
    fontSize: 8,
    marginLeft: 4,
  },
});

export const IconText: React.FC<IIconText> = ({ style, text, iconName }) => {
  return (
    <View style={[styles.container, style!]}>
      <Icon size={10} name={iconName} />
      <Text style={[styles.text, { color: THEME.colors.text }]}>{text}</Text>
    </View>
  );
};
export default IconText;
