import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import NewsCard from '../../components/NewsCard/NewsCard';
import SearchInput from '../../components/SearchInput/SearchInput';
import { Helpers } from '../../theme';
import styles from './NewsScreenStyle';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'The Multi-Billion Dollar Start Of A Nuclear Fusion Boom',
    image:
      'https://images.unsplash.com/photo-1638708643018-7663c16028bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    time: '4 hours ago',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Tesla Is Bringing Smart Home Tech To Your Car',
    image:
      'https://images.unsplash.com/photo-1534179523731-b2922018150a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    time: '6 hours ago',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Samsung needs to bring back its iPod competitor',
    image:
      'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    time: '7 hours ago',
  },
];

const NewsScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ ...Helpers.horizontalMargin }}>
      <Header />
      <SearchInput
        title="Search"
        term=""
        onTermChange={() => {}}
        onTermSubmit={() => {}}
      />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <NewsCard title={item.title} image={item.image} time={item.time} />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={({ highlighted }) => (
          <View style={[styles.separator, highlighted]} />
        )}
      />
    </SafeAreaView>
  );
};

export default NewsScreen;
