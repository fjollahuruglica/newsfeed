import createDataContext from './createDataContext';
import api, { handleError } from './index';
import { AppState } from './createDataContext';

export const initialState: AppState = {
  news: [],
};

const reducer = (state: AppState, action: any) => {
  switch (action.type) {
    case 'SEARCH_NEWS':
      return { ...state, news: action.payload };
    default:
      return state;
  }
};

export const searchNews =
  (dispatch: React.Dispatch<any>) => async (term: any) => {
    if (!term) {
      return handleError({ message: 'Term  is required!' });
    }
    const response = await api.get('1/news', {
      params: {
        q: term,
        country: 'us',
      },
    });
    dispatch({ type: 'SEARCH_NEWS', payload: response.data.results });
    return response.data.results;
  };
export const { Provider, Context } = createDataContext({
  reducer,
  actions: { searchNews },
  defaultValue: { initialState },
});
