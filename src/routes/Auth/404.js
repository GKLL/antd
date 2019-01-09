import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './404.less';
import ViewTitle from '@/components/ViewTitle';
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
function NoAuthPage({dispatch, location, example}) {
  return (
    <ViewTitle {...location}>
    <div className={styles.normal}>
      <h1>404</h1>
      <p>您迷路了</p>
      <div className={styles.btnBox}>
        <Link className={styles.inlineBtn} to="/">
          返回首页
        </Link>
      </div>
    </div>
    </ViewTitle>
  );
}

NoAuthPage.propTypes = {
};


function  mapStateToProps({example}) {
	return {
		example
	};
}

export default connect(mapStateToProps)(NoAuthPage);
