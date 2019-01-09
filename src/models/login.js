import { login } from '@/services/login';
export default {

  namespace: 'login',

  state: {
    mobile: '',
    registerSource: 1,
    verificationCode: '',
    isPhoneError: false,
    isCodeError: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *changePhoneError({ payload }, { put }) {  // eslint-disable-line
      yield put({ 
        type: 'changePhoneErrorrSuccess',
        payload: {
          isPhoneError: payload.isPhoneError,
        } 
      });
    },
    *changeCodeError({ payload }, { put }) {  // eslint-disable-line
      yield put({ 
        type: 'changeCodeErrorrSuccess',
        payload: {
          isCodeError: payload.isCodeError,
        } 
      });
    },
    *changeValue({ payload }, { put }) {  // eslint-disable-line
      yield put({ 
        type: 'changeValueSuccess',
        payload: {
          mobile: payload.mobile,
        } 
      });
    },
    *changeCode({ payload }, { put }) {  // eslint-disable-line
      yield put({ 
        type: 'changeCodeSuccess',
        payload: {
          verificationCode: payload.verificationCode,
        } 
      });
    },
    *login({ payload }, { call, put }) {
      try {
        const { data } = yield call(login, payload);
        if (data && data.code === '000') {
          console.log(data)
        }
      } catch (err) {
        throw err || 'new error!';
      }
    }
  },

  reducers: {
    changeValueSuccess(state, action) {
      return { ...state, ...action.payload };
    },
    changePhoneErrorrSuccess(state, action) {
      return { ...state, ...action.payload };
    },
    changeCodeErrorrSuccess(state, action) {
      return { ...state, ...action.payload };
    },
    changeCodeSuccess(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
