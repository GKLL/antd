import React from 'react';
import imgSrc from '@/assets/yay.jpg';
import {SingleImgView} from 'react-imageview';
const App = (picView, picIndex, toggleView) => {
  const imagelist = [imgSrc, imgSrc];

  const toggleIndex = (imagelist, current) => {
    SingleImgView.show({
      imagelist,
      current,
      maxScale: 3,
      close: ()=>{SingleImgView.hide()},
      initCallback: ()=>{
        /* 初始化后的回调*/
      }
    })
  }
  return (
    <div>
      {
        imagelist && imagelist.map((pic, index) => (
          <img alt={`img-${index}`} src={pic} width="200" height="200" key={`img-${index}`} onClick={() => toggleIndex(imagelist, index)}/>
        ))
      }
    </div>
  );
};

App.propTypes = {
};

export default App;
