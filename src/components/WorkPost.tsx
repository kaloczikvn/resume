import * as React from 'react';
import { Text, Style, View, StyleSheet, Link } from '~/react-pdf';
import { IconText } from './IconText';
import { DateRange } from './DateRange';
import THEME from '~/theme';

export interface IWorkPost {
  style?: Style;
  endAt?: string;
  companyUrl?: string;
  startAt: string;
  title: string;
  companyName: string;
  location: string;
  description?: string;
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: 'Rajdhani',
    fontWeight: 'bold',
  },
  metaInfoContainer: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  workPlace: {
    fontSize: 10,
    fontFamily: 'Rajdhani',
    fontWeight: 'bold',
  },
  workWeb: {
    fontSize: 7,
    fontFamily: 'Rajdhani',
  },
  description: {
    fontSize: 8,
    fontFamily: 'OpenSans',
    marginTop: 4,
  },
  content: {
    marginTop: 10,
  },
});

export const WorkPostTitle: React.FC<{ style?: Style, children?: any }> = ({ children, style }) => {
  return <Text style={[styles.title, style!]}>{children}</Text>;
};

export const WorkPostWorkPlace: React.FC<{ style?: Style; url?: string, children?: any }> = ({ children, url, style }) => {
  const commonStyle = [styles.workPlace, { color: THEME.colors.primary }, style!];

  if (url) {
    return (
      <Link src={url} style={{ textDecoration: 'none' }}>
        <Text style={commonStyle}>{children}</Text>
      </Link>
    );
  }

  return <Text style={commonStyle}>{children}</Text>;
};

export const WorkPostWeb: React.FC<{ style?: Style; url?: string, children?: any }> = ({ children, url, style }) => {
  const commonStyle = [styles.workWeb, { color: THEME.colors.primary }, style!];

  if (url) {
    return (
      <Link src={url}>
        <Text style={commonStyle}>{children}</Text>
      </Link>
    );
  }

  return <Text style={commonStyle}>{children}</Text>;
};

export const WorkPost: React.FC<IWorkPost> = ({
  style,
  title,
  companyName,
  companyUrl,
  location,
  startAt,
  endAt,
  description,
  children,
}) => {
  return (
    <View style={style}>
      <WorkPostTitle>{title}</WorkPostTitle>
      <View style={styles.metaInfoContainer}>
        {companyName ? <WorkPostWorkPlace url={companyUrl}>{companyName}</WorkPostWorkPlace> : null}
        <DateRange
          style={{ marginLeft: companyName ? 'auto' : 0, marginRight: 16 }}
          startAt={startAt}
          endAt={endAt}
        />
        <IconText text={location} iconName='location' />
      </View>
      <View style={styles.metaInfoContainer}>
        <WorkPostWeb url={companyUrl}>{companyUrl}</WorkPostWeb>
      </View>
      {description && (
        <Text style={[styles.description, { color: THEME.colors.text }]}>{description}</Text>
      )}
      {React.Children.count(children) > 0 ? <View style={styles.content}>{children}</View> : null}
    </View>
  );
};
export default WorkPost;
