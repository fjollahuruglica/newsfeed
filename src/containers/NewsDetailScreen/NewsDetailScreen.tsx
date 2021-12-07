import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Animated } from 'react-native';
import { View } from 'react-native';
import { RootStackParamList } from '../../RootContainer';
import ImageCard from '../../components/ImageCard/ImageCard';
import DetailBody from '../../components/DetailBody/DetailBody';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { INews } from '../../store/models';
import { Helpers } from '../../theme';
import { RouteProp } from '@react-navigation/native';

type NewsDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewsDetailScreen'
>;

type NewsDetailRouteProp = RouteProp<RootStackParamList, 'NewsDetailScreen'>;

type Props = {
  route: NewsDetailRouteProp;
  navigation: NewsDetailNavigationProp;
  item: INews;
};

const NewsDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { item } = route.params;
  const insets = useSafeAreaInsets();
  const [bounceValue] = useState(new Animated.Value(-35));

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
        toValue: -35,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View
      style={{
        ...Helpers.fill,
        paddingBottom: Math.max(insets.bottom, 16),
      }}>
      <ImageCard
        navigation={navigation}
        title={item.title}
        image={item.image_url}
        description={item.description}
      />
      <DetailBody
        handleScroll={handleScroll}
        toggleSubview={toggleSubview}
        bounceValue={bounceValue}
        item={item}
      />
    </View>
  );
};

export default NewsDetailScreen;
