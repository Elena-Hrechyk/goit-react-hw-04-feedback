import PropTypes from 'prop-types';
import css from './Buttons.module.css';

export const Buttons = ({ options, onClick }) => {
  return (
    <ul className={css.list}>
      {options.map(button => {
        return (
          <li className={css.item} key={button}>
            <button
              type="button"
              className={css.btn}
              onClick={() => {
                onClick(button);
              }}
            >
              {button}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Buttons.prototype = {
  options: PropTypes.array,
  onClickButton: PropTypes.func,
};
