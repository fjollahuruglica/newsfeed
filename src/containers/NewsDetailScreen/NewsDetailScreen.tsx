import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Animated } from 'react-native';
import { View } from 'react-native';
import { RootStackParamList } from '../../../App';
import ImageCard from '../../components/ImageCard/ImageCard';
import DetailBody from '../../components/DetailBody/DetailBody';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewsDetailScreen'
>;
type ScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetailScreen'>;

type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};

const NewsDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { itemId } = route.params;
  const insets = useSafeAreaInsets();
  const [bounceValue] = useState(new Animated.Value(-20));

  const toggleSubview = () => {
    Animated.spring(bounceValue, {
      toValue: -400,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  const handleScroll = (event: any) => {
    if (event.nativeEvent.contentOffset.y <= 0) {
      Animated.spring(bounceValue, {
        toValue: -20,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={{ flex: 1, paddingBottom: Math.max(insets.bottom, 16) }}>
      <ImageCard navigation={navigation} />
      <DetailBody
        handleScroll={handleScroll}
        toggleSubview={toggleSubview}
        bounceValue={bounceValue}
      />
    </View>
  );
};

export default NewsDetailScreen;
