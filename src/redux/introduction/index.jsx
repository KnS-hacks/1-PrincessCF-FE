import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIntroductionList, getIntroduction } from '@api/IntroductionApi';

const name = 'introduction';

const initialIntroduction = {
  introductionList: [],
  introduction: {
    name: '',
    hashtag: [],
    interest: [],
    participate: [],
    introduce: '',
    school: '',
    team: '',
  },
  isLoading: false,
  error: '',
};

export const fetchIntroductionList = createAsyncThunk(`${name}/fetchAllIntroduction`, async () => {
  const { data } = await getIntroductionList();
  return data;
});

export const fetchIntroduction = createAsyncThunk(`${name}/fetchIntroduction`, async (id) => {
  const { data } = await getIntroduction(id);
  return data;
});

export const introduction = createSlice({
  name,
  initialState: initialIntroduction,
  reducers: {},
  extraReducers: {
    //   대기상태 = 로딩 세팅
    [fetchIntroductionList.pending]: (state) => {
      state.introductionList = [];
      state.isLoading = true;
    },
    // 정상 = 결과 값 가져오기
    [fetchIntroductionList.fulfilled]: (state, action) => {
      state.introductionList = action.payload;
      state.isLoading = false;
    },
    // 실패 = 오류 메세지
    [fetchIntroductionList.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchIntroduction.pending]: (state) => {
      state.introduction = {};
      state.isLoading = true;
    },
    [fetchIntroduction.fulfilled]: (state, action) => {
      state.introduction = { ...action.payload };
      state.isLoading = false;
    },
    [fetchIntroduction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
