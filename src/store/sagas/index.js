import { all, takeLatest } from 'redux-saga/effects';

import { TopicsTypes } from '../ducks/topics';
import { getTopics } from './topics';

export default function* rootSaga() {
  yield all([takeLatest(TopicsTypes.GET_TOPICS_REQUEST, getTopics)]);
}
