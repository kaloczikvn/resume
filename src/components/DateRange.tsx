import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { Style } from '~/react-pdf';
import { IconText } from './IconText';

export interface IDateRange {
  style?: Style;
  startAt: string;
  endAt?: string;
}

export function formatDate(dateString: string, format: string = 'LL/yyyy') {
  const formatString = 'yyyy-MM-dd';
  const referenceDate = new Date();
  return dateFnsFormat(dateFnsParse(dateString, formatString, referenceDate), format);
}

export const DateRange: React.FC<IDateRange> = ({ startAt, endAt, style }) => {
  const dateRangeText = [startAt, endAt ? endAt : 'Jelenlegi'].join(' - ');
  return <IconText style={style} text={dateRangeText} iconName='calendar' />;
};
export default DateRange;
