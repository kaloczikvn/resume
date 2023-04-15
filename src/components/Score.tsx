import { View } from '~/react-pdf';
import THEME from '~/theme';
import { Icon } from './Icon';

export interface IScore {
  id: string;
  rank: number;
}

export const Score: React.FC<IScore> = ({ id, rank }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={`${id}-${index}`}
          size={5.5}
          name='dot'
          style={{ marginRight: 1 }}
          color={index <= rank - 1 ? THEME.colors.primary : THEME.colors.lightGray}
        />
      ))}
    </View>
  );
};
export default Score;
