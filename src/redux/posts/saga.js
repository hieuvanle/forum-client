import { all, takeEvery, put, call } from "redux-saga/effects";
import { GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from "./actions";
import { PostResource } from "../../services/PostResource";

function* getPosts() {
  try {
    const res = yield call(PostResource.GET_ALL);
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_POSTS_FAILURE,
      payload: err,
    });
  }
}

export default function* postWatchers() {
  yield all([takeEvery(GET_POSTS, getPosts)]);
}
