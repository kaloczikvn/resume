import * as React from 'react';
import { StyleSheet, View } from '~/react-pdf';
import THEME from '~/theme';
import { Icon, IIcon } from './Icon';

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    borderRadius: 99999,
  },
});

export const RoundedIcon: React.FC<IIcon> = ({ style, ...props }) => {
  return (
    <View style={[styles.container, { backgroundColor: THEME.colors.lightGray }, style!]}>
      <Icon {...props} />
    </View>
  );
};
export default RoundedIcon;
