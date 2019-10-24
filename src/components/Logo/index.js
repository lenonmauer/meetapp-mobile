import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

const logo = require('../../assets/images/logo.png');

function Logo({ size, style }) {
  const fstyle = [{ width: size, height: size }, style];

  return <Image style={fstyle} source={logo} />;
}

Logo.propTypes = {};

export default Logo;
