import React from 'react';
import { connect } from 'dva';
import styles from './TrustOnline.less';
import { Flex, Button, InputItem, Picker} from 'antd-mobile';
import { createForm } from 'rc-form';
import ViewTitle from '@/components/ViewTitle';
const citys = [{
  label: <span>北京市</span>,
  value: '110100'
},{
  label: <span>杭州市</span>,
  value: '330100'
},{
  label: <span>武汉市</span>,
  value: '420100'
},{
  label: <span>成都市</span>,
  value: '510100'
}]

function TrustOnlinePage({dispatch, location, login}) {
  class Trust extends React.Component {
    state = {
      cols: 1,
      cityValue: ['']
    };
    onChangeColor = (city) => {
      this.setState({
        cityValue: city,
      });
    };

    render() {
      console.log(this.props.form)
      const { getFieldProps } = this.props.form;
      return (
        <div className={styles.trustPage}>
          <div className={styles.title}>
            <h3>添加房屋信息</h3>
            <span>添加爱屋信息，更好地对房屋实施评估</span>
          </div>
          <div className={styles.form}>
            <Flex className={`${styles.flexForm} ${styles.border}`}>
              <label>城市</label>
              <Flex.Item>
                <Picker data={citys} value={this.state.cityValue} cols={1} onChange={this.onChangeColor}>
                  <InputItem type="phone" placeholder="" {...getFieldProps('cityId')}></InputItem>
                </Picker>
              </Flex.Item>
            </Flex>
            <Flex className={styles.flexForm}>
              <label>小区名称</label>
              <Flex.Item><InputItem type="phone" placeholder="请输入您爱屋所在的小区"></InputItem></Flex.Item>
            </Flex>
          </div>
          <div className={styles.title}>
            <h3>留下联系方式</h3>
            <span>提交成功后，可以使用这个手机号登录查看房源动态</span>
          </div>
          <div className={styles.form}>
            <Flex className={`${styles.flexForm} ${styles.border}`}>
              <label>姓名</label>
              <Flex.Item><InputItem type="phone" placeholder="请输入您的称呼" {...getFieldProps('userName')}></InputItem>
              </Flex.Item>
            </Flex>
            <Flex className={`${styles.flexForm} ${styles.border}`}>
              <label>手机号</label>
              <Flex.Item><InputItem type="phone" placeholder="输入您的手机号码"></InputItem></Flex.Item>
            </Flex>
            <Flex className={styles.flexForm}>
              <label>验证码</label>
              <Flex.Item><InputItem type="phone" placeholder="请输入验证码"></InputItem></Flex.Item>
              <Button className={`${styles.codeBtn} ${styles['am-button']}`}>获取验证码</Button>
            </Flex>
          </div>
          <div className={styles.title}>
            <h3>其他联系方式（选填）</h3>
            <span>可以让资产管家更容易与您取得联系</span>
          </div>
          <div className={styles.form}>
            <Flex className={`${styles.flexForm} ${styles.border}`}>
              <label>姓名</label>
              <Flex.Item className={`${styles['am-list-item']}`}>
                <InputItem type="phone" placeholder="请输入您的称呼" {...getFieldProps('userName')}></InputItem>
              </Flex.Item>
            </Flex>
            <Flex className={`${styles.flexForm} ${styles.border}`}>
              <label>手机号</label>
              <Flex.Item><InputItem type="phone" placeholder="输入您的手机号码"></InputItem></Flex.Item>
            </Flex>
          </div>
          <Button className={styles.submitBtn}>提交</Button>
        </div>
      )
    }
  }
  const TrustOnline = createForm()(Trust);
  return (
    <ViewTitle {...location}>
      <TrustOnline />
    </ViewTitle>
  )
}




TrustOnlinePage.propTypes = {
};

function  mapStateToProps({example}) {
	return {
		example
	};
}

export default connect(mapStateToProps)(TrustOnlinePage);
