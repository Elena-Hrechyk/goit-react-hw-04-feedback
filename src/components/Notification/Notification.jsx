import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <span className={css.message}>{message}</span>;
};

Notification.prototype = {
  message: PropTypes.string,
};
