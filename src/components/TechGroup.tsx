import { Text, Style, View, StyleSheet } from '~/react-pdf';
import THEME from '~/theme';

export interface ITechGroup {
  style?: Style;
  title: string;
  tags: string[];
}

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: 'Rajdhani',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tag: {
    fontSize: 9,
    fontFamily: 'OpenSans',
  },
  tagContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export const TechGroup: React.FC<ITechGroup> = ({ style, title, tags }) => {
  return (
    <View style={style}>
      <Text style={[styles.title, { color: THEME.colors.primary }]}>{title}</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag) => (
          <View key={tag} style={[styles.tagContainer, { borderColor: THEME.colors.gray }]}>
            <Text style={styles.tag}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
export default TechGroup;
