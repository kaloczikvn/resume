import * as React from 'react';
import { Text, Style, StyleSheet } from '~/react-pdf';
import THEME from '~/theme';

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans',
    fontSize: 8,
  },
});

export const Resume: React.FC<{ style?: Style, children: any }> = ({ children, style }) => {
  return <Text style={[styles.container, { color: THEME.colors.text }, style!]}>{children}</Text>;
};
export default Resume;
