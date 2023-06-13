import React from 'react';
import PropTypes from 'prop-types';
import css from './TitleFeedback.module.css';

export const TitleFeedback = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

TitleFeedback.prototype = {
  title: PropTypes.string.isRequired,
};
