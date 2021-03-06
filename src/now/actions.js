import {
  INIT_MOOD_SELECTIONS,
  SELECT_MOOD_BTN_CLICKED,
  ADD_MOOD_BTN,
  SUBMIT_MOOD_CONTENT_FETCH_STARTED,
  SUBMIT_MOOD_CONTENT_FETCH_SUCCESS,
  SUBMIT_MOOD_CONTENT_FETCH_FAILURE
} from './actionTypes';

import axios from 'axios';

export const initMood = (defaultMoodNames) => ({
  type: INIT_MOOD_SELECTIONS,
  defaultMoodNames
});

export const selectMoodBtnClicked = (btnIndex) => ({
  type: SELECT_MOOD_BTN_CLICKED,
  btnIndex
});

export const addMoodBtn = (moodName) => ({
  type: ADD_MOOD_BTN,
  moodName
});

export const submitMoodContent = (username, selectMoods, moodDescription) => {
  return (dispatch) => {
    const submitMoodContentUrl = `/api/users/${username}/moods`;

    dispatch(submitMoodContentFetchStarted());

    axios.post(submitMoodContentUrl, {
      moodNames: selectMoods,
      moodDescription: moodDescription.value
    }, {
      headers: {
        'Authorization': 'jwt ' + localStorage.getItem('token')
      }
    })
    .then(res => {
      moodDescription.value = '';
      dispatch(submitMoodContentFetchSuccess(res, selectMoods));
    })
    .catch(err => {
      dispatch(submitMoodContentFetchFailure(err));
    })
  }
};

export const submitMoodContentFetchStarted = () => ({
  type: SUBMIT_MOOD_CONTENT_FETCH_STARTED
});

export const submitMoodContentFetchSuccess = (result, selectMoods) => ({
  type: SUBMIT_MOOD_CONTENT_FETCH_SUCCESS,
  result,
  selectMoods
});

export const submitMoodContentFetchFailure = (error) => ({
  type: SUBMIT_MOOD_CONTENT_FETCH_FAILURE,
  error
});
