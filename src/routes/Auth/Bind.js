import React from 'react';
import { connect } from 'dva';
import styles from './Bind.less';
import { InputItem, WhiteSpace, WingBlank } from 'antd-mobile';
import ViewTitle from '@/components/ViewTitle';
function Bind({dispatch, location, example}) {
 
  return (
    <ViewTitle {...location}>
      <div className={styles.normal}>
        <h2 className={styles.header}>登录</h2>
        <WingBlank>
          <div className={styles.info}>手机号 (<span>*新用户初次登录将自动注册</span>)</div>
          <InputItem
            type="phone"
            placeholder="请输入手机号码"
            className={styles.Input}
          ></InputItem>
          <div className={styles.codeInfo}>验证码</div>
          
          <InputItem
            type="phone"
            placeholder="请输入验证码"
            className={styles.Input}
          ></InputItem>
        </WingBlank>
      </div>
    </ViewTitle>
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
