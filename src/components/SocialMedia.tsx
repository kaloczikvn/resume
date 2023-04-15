import { Text, StyleSheet, View, Link, Style } from '~/react-pdf';
import THEME from '~/theme';

export interface ISocialMedia {
  name: string;
  profileUrl: string;
  style?: Style;
}

const styles = StyleSheet.create({
  name: {
    fontFamily: 'OpenSans',
    fontSize: 10,
  },
  username: {
    fontFamily: 'OpenSans',
    fontSize: 8,
    marginTop: 2,
  },
});

export const SocialMedia: React.FC<ISocialMedia> = ({ name, profileUrl, ...props }) => {
  const username = `${profileUrl.split('/').splice(-1)}`;

  return (
    <View {...props}>
      <Text style={styles.name}>{name}</Text>
      <Link src={profileUrl}>
        <Text style={[styles.username, { color: THEME.colors.text }]}>{username}</Text>
      </Link>
    </View>
  );
};
export default SocialMedia;
