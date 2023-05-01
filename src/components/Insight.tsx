import { Text, View, Style, StyleSheet } from '~/react-pdf';
import THEME from '~/theme';
import { TIconName } from './Icon';
import { RoundedIcon } from './RoundedIcon';

export interface IInsight {
  style?: Style;
  iconName?: TIconName;
  title: string;
  description: any;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 9,
    fontFamily: 'Rajdhani',
    fontWeight: 'bold',
  },
  description: {
    fontFamily: 'OpenSans',
    fontSize: 7,
    marginTop: 2,
    opacity: 0.8
  },
});

export const Insight: React.FC<IInsight> = ({ style, title, description, iconName }) => {
  return (
    <View style={[styles.container, style!]}>
      {iconName && (
        <RoundedIcon
          size={18}
          name={iconName}
          color={THEME.colors.primary}
          style={{ marginRight: 10 }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.description, { color: THEME.colors.text }]}>{description}</Text>
      </View>
    </View>
  );
};
export default Insight;
