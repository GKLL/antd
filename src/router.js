import React from 'react';
import { Router, Route, Switch, routerRedux  } from 'dva/router';
import PropTypes from 'prop-types';
import dynamic from 'dva/dynamic';
import { routes } from '@/common/router';
import ViewTitle from '@/components/ViewTitle';
const {ConnectedRouter} = routerRedux;

// const ViewWithMeta = props => (
//   <Helmet>
//     <title>{props.title}</title>
//     {props.metas && props.metas.length
//       ? props.metas.map((m, index) => <meta key={index} {...m} />)
//       : null}
//   </Helmet>
// )
// const ViewWithMeta = props => (
//   <React.Fragment>
//     <ViewWithMeta {...props} />
//     <props.component {...props} />
//   </React.Fragment>
// )
const setTitle = (title) => {
  document.title = title
};

const Routers = ({ history, app }) => {


  return (
    // <ViewTitle routes={routes} history={history.location}>
      <ConnectedRouter history={history}>
        <Router history={history}>
          <Switch>
            {
              routes.map(({ path, ...dynamics}, key) => (
                <Route key={key}
                  exact
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics,
                  })}
                  onEnter={()=>{document.title= path}}
                />
              ))
            }
          </Switch>
        </Router>
      </ConnectedRouter>
    // </ViewTitle>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default Routers;
