import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../../App';
import { Colors, Images } from '../../theme';
import Header from '../Header/Header';
import styles from './ImageCardStyle';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewsDetailScreen'
>;
interface Props {
  navigation: ScreenNavigationProp;
}
const ImageCard: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1638708643018-7663c16028bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      }}
      resizeMode="cover"
      style={styles.cardContainer}>
      <LinearGradient
        colors={[Colors.$transparent, Colors.$primary]}
        style={styles.gradientStyle}>
        <SafeAreaView style={styles.cardBody}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.backIcon}
              resizeMode="cover"
              source={Images.backIcon}
            />
          </TouchableOpacity>
          <Header
            title="The Multi-Billion Dollar Start Of A Nuclear Fusion Boom"
            subTitle="Theoretically, two lone nuclear reactors running on small pellets could power the entire planet, safely and cleanly."
            light
          />
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default ImageCard;
