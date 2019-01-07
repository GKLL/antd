import React from 'react';
import DocumentTitle from "react-document-title";
const App = (props) => {
  let title = '';
  const pathname = props.history.pathname;
  props.routes && props.routes.forEach(item => {
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
