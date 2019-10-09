import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function Logo({ size }) {
  const img = require('../../assets/images/logo.svg');

  return <Image style={{ width: size, height: size }} source={{ img }} />;
}

Logo.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Logo;
