import React from 'react';
import { connect } from 'dva';
import styles from './Bind.less';
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

function Bind({dispatch, example}) {
 
  return (
    <div className={styles.normal}>
      <h1 className="header">登录</h1>
    </div>
  );
}

Bind.propTypes = {
};


function  mapStateToProps({example}) {
	return {
		example
	};
}

export default connect(mapStateToProps)(Bind);
