import React, { Dispatch, SetStateAction } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Images } from '../../theme';
import styles from './SearchInputStyle';
interface Props {
  title: string;
  term: string;
  onTermChange: Dispatch<SetStateAction<string>>;
  onTermSubmit: () => void;
}
const SearchInput: React.FC<Props> = ({
  title,
  term,
  onTermChange,
  onTermSubmit,
}) => {
  return (
    <View style={styles.searchBtn}>
      <TouchableOpacity onPress={onTermSubmit}>
        <Image style={styles.searchIcon} source={Images.search} />
      </TouchableOpacity>
      <TextInput
        placeholder={title}
        placeholderTextColor="#7c7c7c"
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchTxt}
      />
    </View>
  );
};

export default SearchInput;
