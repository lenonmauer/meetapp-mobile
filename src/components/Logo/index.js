import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function Logo({ size, style }) {
  const fstyle = [{ width: size, height: size }, style];

  return (
    <Image style={fstyle} source={require('../../assets/images/logo.png')} />
  );
}

export default Logo;
