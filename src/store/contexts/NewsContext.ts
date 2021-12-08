import createDataContext from './createDataContext';
import api, { handleError } from './index';
import { AppState } from './createDataContext';
import i18n from '../../i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const initialState: any = {
  news: [],
  language: 'en',
  booted: false,
};

const reducer = (state: AppState, action: any) => {
  switch (action.type) {
    case 'SEARCH_NEWS':
      return { ...state, news: action.payload };
    case 'CHANGE_LANGUAGE':
      return { ...state, language: action.language };
    case 'CHANGE_APP_STATE':
      return { ...state, booted: action.booted };
    default:
      return state;
  }
};

export const changeLanguage =
  (dispatch: React.Dispatch<any>) => async (language: any) => {
    dispatch({ type: 'CHANGE_LANGUAGE', language });
    i18n.changeLanguage(language);
    await AsyncStorage.setItem('language', language);
  };

export const changeAppState =
  (dispatch: React.Dispatch<any>) => async (booted: any) => {
    dispatch({ type: 'CHANGE_APP_STATE', booted });
  };

export const searchNews =
  (dispatch: React.Dispatch<any>) => async (term: any, language: string) => {
    if (!term) {
      return handleError({ message: 'Term  is required!' });
    }
    const response = await api.get('1/news', {
      params: {
        q: term,
        language,
      },
    });
    dispatch({ type: 'SEARCH_NEWS', payload: response.data.results });
    return response.data.results;
  };

export const { Provider, Context } = createDataContext({
  reducer,
  actions: { changeLanguage, changeAppState, searchNews },
  defaultValue: initialState,
});
