import React from 'react';
import { Animated, View } from 'react-native';
import { Helpers } from '../../theme';
import styles from './DetailBodyStyle';
import { ScrollView } from 'react-native-gesture-handler';
import TagCard from '../TagCard/TagCard';
import Header from '../Header/Header';

type Props = {
  toggleSubview: () => void;
  handleScroll: (event: any) => void;
  bounceValue: Animated.Value;
};

const DetailBody: React.FC<Props> = ({
  toggleSubview,
  handleScroll,
  bounceValue,
}) => {
  return (
    <Animated.View
      style={{
        transform: [{ translateY: bounceValue }],
        ...styles.cardContainer,
      }}>
      <ScrollView
        onScrollBeginDrag={toggleSubview}
        onScroll={handleScroll}
        scrollEventThrottle={500}
        style={{ ...Helpers.horizontalMargin }}>
        <View style={styles.tagCardContainer}>
          <TagCard text="Micheal Scott" />
          <TagCard text="4 hours ago" light icon />
        </View>
        <Header
          title="The Multi-Billion Dollar Start Of A Nuclear Fusion Boom"
          subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quod dicta, consequuntur non sunt dolores ipsa repellendus asperiores dolorum repudiandae minima consequatur aspernatur voluptate expedita nemo eligendi. Non, qui in!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quod dicta, consequuntur non sunt dolores ipsa repellendus asperiores dolorum repudiandae minima consequatur aspernatur voluptate expedita nemo eligendi. Non, qui in! Quibusdam quod dicta, consequuntur non sunt dolores ipsa repellendus asperiores dolorum repudiandae minima consequatur aspernatur voluptate expedita nemo eligendi. Non, qui in!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quod dicta, consequuntur non sunt dolores ipsa repellendus asperiores dolorum repudiandae minima consequatur aspernatur voluptate expedita nemo eligendi. Non, qui in! Quibusdam quod dicta, consequuntur non sunt dolores ipsa repellendus asperiores dolorum repudiandae minima consequatur aspernatur voluptate expedita nemo eligendi. Non, qui in!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quod dicta, consequuntur non sunt dolores ipsa repellendus asperiores dolorum repudiandae minima consequatur aspernatur voluptate expedita nemo eligendi. Non, qui in!  minima consequatur aspernatur voluptate expedita nemo eligendi. Non, qui in!  minima consequatur aspernatur voluptate expedita nemo eligendi. Non, qui in! minima consequatur aspernatur voluptate expedita nemo eligendi. Non, qui in! minima consequatur aspernatur voluptate expedita nemo eligendi. Non, qui in!"
          small
          noNumberOfLines
        />
      </ScrollView>
    </Animated.View>
  );
};

export default DetailBody;
