import { useTheme } from '@react-navigation/native';
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
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.searchBtn, backgroundColor: colors.border }}>
      <TouchableOpacity onPress={onTermSubmit}>
        <Image
          style={{ ...styles.searchIcon, tintColor: colors.primary }}
          source={Images.search}
        />
      </TouchableOpacity>
      <TextInput
        placeholder={title}
        placeholderTextColor={colors.primary}
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
