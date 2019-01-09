import React from 'react';
import { connect } from 'dva';
import styles from './Bind.less';
import { InputItem, Flex, WingBlank,Button} from 'antd-mobile';
import ViewTitle from '@/components/ViewTitle';
function Bind({dispatch, location, login}) {
  const {mobile, verificationCode, isPhoneError, isCodeError, registerSource} = login;

  const onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      dispatch({
        type: 'login/changePhoneError',
        payload: {
          isPhoneError: true
        }
      })
    } else {
      dispatch({
        type: 'login/changePhoneError',
        payload: {
          isPhoneError: false
        }
      })
    }
    dispatch({
      type: 'login/changeValue',
      payload: {
        mobile: value
      }
    })
  }

  // 验证验证码
  const onCodeChange = (value) => {
    if (value.replace(/\s/g, '').length < 6) {
      dispatch({
        type: 'login/changeCodeError',
        payload: {
          isCodeError: true
        }
      })
    } else {
      dispatch({
        type: 'login/changeCodeError',
        payload: {
          isCodeError: false
        }
      })
    }
    dispatch({
      type: 'login/changeCode',
      payload: {
        verificationCode: value
      }
    })
  }

  // 提交
  const handleSubmit = () => {
    dispatch({
      type: 'login/login',
      payload:{ 
        verificationCode: verificationCode,
        mobile: mobile,
        registerSource: registerSource,
      }
    })
  }
  return (
    <ViewTitle {...location}>
      <div className={styles.normal}>
        <WingBlank>
        <h2 className={styles.header}>登录</h2>
          <div className={styles.info}>手机号 (<span>*新用户初次登录将自动注册</span>)</div>
          <InputItem
            type="phone"
            placeholder="请输入手机号码"
            error={isPhoneError}
            value={mobile}
            onChange={onChange}
            className={styles.Input}
          ></InputItem>
          <div className={styles.codeInfo}>验证码</div>
          <Flex justify="between">
            <Flex.Item><InputItem
              type="phone"
              placeholder="请输入验证码"
              error={isCodeError}
              value={verificationCode}
              onChange={onCodeChange}
              className={styles.InputCode}
            ></InputItem>
          </Flex.Item>
            <Flex.Item>
              {isPhoneError ? <Button className={styles.codeBtn}>获取验证码 </Button>: <Button className={styles.activeBtn}>获取验证码 </Button>}
            </Flex.Item>
          </Flex>
          {isPhoneError || isCodeError ? <Button className={styles.loginBtn}>登录 </Button>: <Button className={styles.loginActiveBtn} onClick={handleSubmit}>登录 </Button>}
        </WingBlank>
      </div>
    </ViewTitle>
  );
}

Bind.propTypes = {
};


function  mapStateToProps({login}) {
	return {
		login
	};
}

export default connect(mapStateToProps)(Bind);
