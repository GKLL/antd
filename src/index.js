import dva from 'dva';
import './index.less';
import createLoading from 'dva-loading';
import initReactFastclick from 'react-fastclick';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
initReactFastclick(); // 解决在移动端延迟300毫秒的问题
app.start('#root');
export default app._store;