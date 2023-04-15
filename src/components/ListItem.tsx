import { Text, View, Style, StyleSheet } from '~/react-pdf';
import THEME from '~/theme';
import { Icon } from './Icon';

export interface IListItem {
  style?: Style;
  children: any;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  text: {
    fontSize: 8,
    fontFamily: 'OpenSans',
    flex: 1,
  },
});

export const ListItem: React.FC<IListItem> = ({ style, children }) => {
  return (
    <View style={[styles.container, style!]}>
      <Icon name='dot' size={3.5} style={{ margin: 4, marginRight: 8 }} />
      <Text style={[styles.text, { color: THEME.colors.text }]}>
        {children}
      </Text>
    </View>
  );
};
export default ListItem;
