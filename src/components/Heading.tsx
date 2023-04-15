import { StyleSheet, Style, Link, View, Text, Image } from '~/react-pdf';
import THEME from '~/theme';
import { IconText } from './IconText';

export interface IHeading {
  style?: Style;
  avatarSize?: number;
  avatarUrl?: string;
  title: string;
  subtitle: string;
  information: {
    phone?: string;
    email: string;
    website: string;
    location: string;
    dateOfBirth: string;
  };
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 16,
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'absolute',
    right: 0,
    top: -20,
  },
  image: {
    borderRadius: 99999,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily: 'Rajdhani',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Rajdhani',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  link: {
    marginRight: 16,
    textDecoration: 'none',
  },
});

export const Heading: React.FC<IHeading> = ({
  style,
  title,
  subtitle,
  avatarUrl,
  avatarSize = 100,
  information: { phone, email, website, location, dateOfBirth },
}) => {
  return (
    <View style={[styles.container, style!]}>
      <View style={{ margin: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.subTitle, { color: THEME.colors.primary }]}>{subtitle}</Text>
        <View style={styles.infoContainer}>
          {phone ? (
            <Link src={`tel:${phone}`} style={styles.link}>
              <IconText text={phone} iconName='call' />
            </Link>
          ) : null}
          <Link src={`mailto:${email}`} style={styles.link}>
            <IconText text={email} iconName='atSymbol' />
          </Link>
          <Link src={website} style={styles.link}>
            <IconText text={website} iconName='link' />
          </Link>
          <IconText text={location} iconName='location' style={styles.link} />
          <IconText text={dateOfBirth} iconName='cake' />
        </View>
      </View>
      {avatarUrl && (
        <View style={[styles.imageContainer, { width: avatarSize, height: avatarSize }]}>
          <Image style={styles.image} src={avatarUrl} />
        </View>
      )}
    </View>
  );
};
export default Heading;
