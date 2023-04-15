import * as React from 'react';
import { Style, View } from '~/react-pdf';
import { WorkPostTitle, WorkPostWorkPlace } from './WorkPost';
import { IconText } from './IconText';
import { DateRange } from './DateRange';

export interface IEducationPost {
  style?: Style;
  endAt?: string;
  startAt: string;
  title: string;
  subTitle: string;
  location: string;
  children?: any;
}

export const EducationPost: React.FC<IEducationPost> = ({
  style,
  title,
  subTitle,
  startAt,
  endAt,
  location,
  children,
}) => {
  return (
    <View style={style}>
      <WorkPostTitle>{title}</WorkPostTitle>
      <WorkPostWorkPlace style={{ marginTop: 4, marginBottom: 8, fontSize: 9 }}>{subTitle}</WorkPostWorkPlace>
      <DateRange style={{ marginBottom: 4 }} startAt={startAt} endAt={endAt} />
      <IconText style={{ marginBottom: 4 }} iconName='location' text={location} />
      <View style={{ marginTop: 8 }}>{children}</View>
    </View>
  );
};
export default EducationPost;
