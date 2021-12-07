/* eslint-disable react-hooks/exhaustive-deps */
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, RefreshControl } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootBottomTabParamList, RootStackParamList } from '../../../App';
import Header from '../../components/Header/Header';
import NewsCard from '../../components/NewsCard/NewsCard';
import SearchInput from '../../components/SearchInput/SearchInput';
import { Helpers } from '../../theme';
import { Context as NewsContext } from '../../store/contexts/NewsContext';
import styles from './NewsScreenStyle';
import { INews } from '../../store/models';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type NewsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomTabParamList, 'NewsScreen'>,
  StackNavigationProp<RootStackParamList>
>;

const wait = (timeout: number | undefined) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const NewsScreen: React.FC = () => {
  const [term, setTerm] = useState('');
  const [data, setData] = useState<INews[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation<NewsScreenNavigationProp>();

  const {
    state: { news },
    searchNews,
  } = useContext(NewsContext);

  useEffect(() => {
    searchNews('food');
  }, []);

  useEffect(() => {
    setData(news);
  }, [news]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={{ ...Helpers.horizontalMargin, ...Helpers.fill }}>
      <Header title="Discover" subTitle="News from all over the world" />
      <SearchInput
        title="Search"
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchNews(term)}
      />
      {data?.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('NewsDetailScreen', { item })}>
              <NewsCard
                title={item.title}
                image={item.image_url}
                date={item.pubDate}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.title}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ItemSeparatorComponent={({ highlighted }) => (
            <View style={[styles.separator, highlighted]} />
          )}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default NewsScreen;
