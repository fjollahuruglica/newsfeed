import { useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../RootContainer';
import { Images } from '../../theme';
import Header from '../Header/Header';
import styles from './ImageCardStyle';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewsDetailScreen'
>;
interface Props {
  navigation: ScreenNavigationProp;
  title: string;
  image: string;
  description: string;
}
const ImageCard: React.FC<Props> = ({
  navigation,
  title,
  image,
  description,
}) => {
  const { colors } = useTheme();
  return (
    <ImageBackground
      source={{
        uri: image ? image : 'https://picsum.photos/200/300',
      }}
      resizeMode="cover"
      style={styles.cardContainer}>
      <LinearGradient
        colors={[colors.notification, colors.primary]}
        style={styles.gradientStyle}>
        <SafeAreaView style={styles.cardBody}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.backIcon}
              resizeMode="cover"
              source={Images.backIcon}
            />
          </TouchableOpacity>
          <Header title={title} subTitle={description} light />
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default ImageCard;
