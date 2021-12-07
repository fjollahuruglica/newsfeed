import React from 'react';
import { Animated, View } from 'react-native';
import { Helpers } from '../../theme';
import styles from './DetailBodyStyle';
import { ScrollView } from 'react-native-gesture-handler';
import TagCard from '../TagCard/TagCard';
import Header from '../Header/Header';
import { INews } from '../../store/models';
import moment from 'moment';
import { useTheme } from '@react-navigation/native';

type Props = {
  toggleSubview: () => void;
  handleScroll: (event: any) => void;
  bounceValue: Animated.Value;
  item: INews;
};

const DetailBody: React.FC<Props> = ({
  toggleSubview,
  handleScroll,
  bounceValue,
  item,
}) => {
  const time = moment(item.pubDate).startOf('day').fromNow();
  const { colors } = useTheme();
  return (
    <Animated.View
      style={{
        transform: [{ translateY: bounceValue }],
        ...styles.cardContainer,
        backgroundColor: colors.background,
      }}>
      <ScrollView
        onScrollBeginDrag={toggleSubview}
        onScroll={handleScroll}
        scrollEventThrottle={500}
        style={{ ...Helpers.horizontalMargin }}>
        <View style={styles.tagCardContainer}>
          <TagCard text={item.author ? item.author : 'John Doe'} />
          <TagCard text={time} light icon />
        </View>
        <Header
          title={item.title}
          subTitle={
            item.full_description ? item.full_description : item.description
          }
          small
          noNumberOfLines
        />
      </ScrollView>
    </Animated.View>
  );
};

export default DetailBody;
