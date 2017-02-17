/**
 * Created by muduna on 1/10/2017.
 */
import React,{PropTypes} from 'react';

const NotFound = (props) => (
  <div>
    <h1> NotFound </h1>
    {props.children}
  </div>
);

NotFound.propTypes = {
    children: PropTypes.object.isRequired
}
export default NotFound;