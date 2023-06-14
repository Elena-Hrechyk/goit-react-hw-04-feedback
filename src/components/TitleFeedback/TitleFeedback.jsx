import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './TitleFeedback.styled';

export const TitleFeedback = ({ title }) => {
  return <Title>{title}</Title>;
};

TitleFeedback.prototype = {
  title: PropTypes.string.isRequired,
};
