import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function Logo({ size, style }) {
  const img = require('../../assets/images/logo.svg');
  const finalStyle = [{ width: size, height: size }, style];

  return <Image style={finalStyle} source={{ img }} />;
}

Logo.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Logo;
