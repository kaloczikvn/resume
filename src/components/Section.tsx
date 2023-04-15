import * as React from 'react';
import { View, Style, Text, StyleSheet } from '~/react-pdf';
import THEME from '~/theme';

export interface ISection {
  style?: Style;
  title: string;
  spacing: number;
  children?: any;
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 9,
    textTransform: 'uppercase',
    fontFamily: 'Rajdhani',
    fontWeight: 600,
  },
  separator: {
    height: 0.5,
    marginTop: 1,
    marginBottom: 12,
  },
});

export const Section: React.FC<ISection> = ({ style, title, spacing, children }) => {
  const childCount = React.Children.count(children);
  return (
    <View style={[styles.container, style!]}>
      <Text style={[styles.title, { color: THEME.colors.primary }]}>{title}</Text>
      <View style={[styles.separator, { backgroundColor: THEME.colors.primary }]} />
      {React.Children.map(children, (child, index) => {
        const mb = index + 1 === childCount ? 0 : spacing;
        const style = { marginBottom: mb };
        return mb ? React.cloneElement(child, { style }) : child;
      })}
    </View>
  );
};
export default Section;
