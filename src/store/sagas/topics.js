import { Alert } from 'react-native';

import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import TopicsActions from '../ducks/topics';

export function* getTopics() {
  try {
    const response = yield call(api.get, '/topics');

    yield put(TopicsActions.getTopicsSuccess(response.data));
  } catch (err) {
    yield put(TopicsActions.getTopicsFailure(err));
  }
}
