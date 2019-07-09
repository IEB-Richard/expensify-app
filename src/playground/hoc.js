import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent)=> {
  return (props) => (
    <div>
      {props.isActive && <p>This is priviate info, Please don't share it!</p> }
      <WrappedComponent {...props} />
    </div>
  )
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? ( <WrappedComponent {...props} />) : ( <p>Please login to review the info</p> )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById("app"));