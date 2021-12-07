import createDataContext from './createDataContext';
import { AppState } from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const initialState: any = {
  isLight: false,
};

const reducer = (state: AppState, action: any) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, isLight: action.isLight };
    default:
      return state;
  }
};

export const changeTheme =
  (dispatch: React.Dispatch<any>) => async (isLight: string) => {
    dispatch({ type: 'CHANGE_THEME', isLight });
    const theme = isLight ? 'light' : 'dark';
    await AsyncStorage.setItem('theme', theme);
  };

export const { Provider, Context } = createDataContext({
  reducer,
  actions: { changeTheme },
  defaultValue: initialState,
});
