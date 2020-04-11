import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  actionType: ['dataPassed'],
});

export const TopicsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  page: 0,
  loading: false,
  language: 1,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ACTION_TYPE]: state => state.merge({ data: [] }),
});
