import React from 'react';
import { connect } from 'dva';
import styles from './TrustOnline.less';
import { Flex, List, InputItem, WhiteSpace} from 'antd-mobile';
import ViewTitle from '@/components/ViewTitle';
function TrustOnline({ location }) {
  return (
    <ViewTitle {...location}>
    <div>
        <div className={styles.title}>
          <h3>添加房屋信息</h3>
          <span>添加爱屋信息，更好地对房屋实施评估</span>
        </div>
        <div className={styles.form}>
          <Flex className={styles.flexForm}>
            <label>城市</label>
            <Flex.Item><InputItem type="phone" placeholder="成都"></InputItem></Flex.Item>
          </Flex>
          <Flex className={styles.flexForm}>
            <label>小区名称</label>
            <Flex.Item><InputItem type="phone" placeholder="请输入您爱屋所在的小区"></InputItem></Flex.Item>
          </Flex>
        </div>
      </div>
    </ViewTitle>
  );
}

TrustOnline.propTypes = {
};


function  mapStateToProps({example}) {
	return {
		example
	};
}

export default connect(mapStateToProps)(TrustOnline);
