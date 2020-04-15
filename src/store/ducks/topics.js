import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  getTopicsRequest: ['payload'],
  getTopicsSuccess: ['data'],
  getTopicsFailure: ['error'],
});

export const TopicsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  page: 0,
  loading: true,
  language: 1,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TOPICS_REQUEST]: state => state.merge({ loading: true }),
  [Types.GET_TOPICS_SUCCESS]: (state, { data }) =>
    state.merge({ loading: false, error: null, data }),
  [Types.GET_TOPICS_FAILURE]: (state, { error }) =>
    state.merge({ loading: false, error }),
});
