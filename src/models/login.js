
export default {

  namespace: 'example',

  state: {
    list: [],
    isOpen: false, // 图片查看器是否打开
    index: 0, // 初始显示图片序号
    picView: false, // 是否全屏显示图片
    picIndex: 0, // 显示的图片索引

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *changeViewer({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ 
        type: 'changeViewerSuccess',
        payload: {
          picView: payload.picView,
          picIndex: payload.picIndex
        } 
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    changeViewerSuccess(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
