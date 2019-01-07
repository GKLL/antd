import React from 'react';
import { connect } from 'dva';
import styles from './Home.less';
import { Flex } from 'antd-mobile';
import HrTitle from '@/components/HrTitle';
function IndexPage({dispatch, example}) {
  const imgs = {
    homeBg: require('../assets/images/home_bg.jpg'),
    lock: require('../assets/images/smart_lock.jpg'),
    xingkong: require('../assets/images/starhome_xingkong.png'),
    jiameng: require('../assets/images/starhome_jiameng.png'),
    youke: require('../assets/images/starhome_youke.png'),
    userAvatarDefault: require('../assets/images/profileimg.png'),
    yezhu: require('../assets/images/starhome_yezhu.png')
  }
  /**品牌群 */
const Products = () => {
  const starHomesImg = [
    {
      alt: '星空',
      src: imgs.xingkong
    },
    {
      alt: '星空家盟',
      src: imgs.jiameng
    },
    {
      alt: '星空有客',
      src: imgs.youke
    },
    {
      alt: '星空业主',
      src: imgs.yezhu
    }
  ]
  return (
    <Flex className={styles.startHome} wrap="wrap" justify="between">
      {starHomesImg.map((item, index) => {
        return <img src={item.src} alt={item.alt} key={index} />
      })}
    </Flex>
  )
}
  return (
    <div className={styles.normal}>
      <HrTitle title="uoko星空产品服务群"/>
      <Products />
      <section className={styles.HrTitle}>
        <HrTitle title="优客逸家" dec="连续4年最具影响力品牌" />
      </section>
    </div>
  );
}

IndexPage.propTypes = {
};


function  mapStateToProps({example}) {
	return {
		example
	};
}

export default connect(mapStateToProps)(IndexPage);
