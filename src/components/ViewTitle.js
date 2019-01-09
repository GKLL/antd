import React from 'react';
import DocumentTitle from "react-document-title";
import { routes } from '@/common/router';
const App = (props) => {
  
  let title = '';
  const pathname = props.pathname;
  routes && routes.forEach(item => {
    if (item.path === pathname) {
      title = item.title
    }
  })
  return (
     <DocumentTitle title={title}>
      {props.children}
     </DocumentTitle>
  );
};

App.propTypes = {
};

export default App;
