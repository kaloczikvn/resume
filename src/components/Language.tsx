import { View, Text, Style, StyleSheet } from '~/react-pdf';
import THEME from '~/theme';
import { Score } from './Score';

export interface ILanguage {
  style?: Style;
  name: string;
  scoreLabel: string;
  score: number;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'OpenSans',
    fontSize: 10,
  },
  scoreLabel: {
    fontFamily: 'OpenSans',
    fontSize: 8,
    marginLeft: 'auto',
    marginRight: 5,
  },
});

export const Language: React.FC<ILanguage> = ({ style, name, scoreLabel, score }) => {
  return (
    <View style={[styles.container, style!]}>
      <Text style={styles.name}>{name}</Text>
      <Text style={[styles.scoreLabel, { color: THEME.colors.text }]}>{scoreLabel}</Text>
      <Score id='language' rank={score} />
    </View>
  );
};
