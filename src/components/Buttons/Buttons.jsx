import PropTypes from 'prop-types';
import { List, Item, Button } from './Buttons.styled';

export const Buttons = ({ options, onClick }) => {
  return (
    <List>
      {options.map(button => {
        return (
          <Item key={button}>
            <Button
              type="button"
              onClick={() => {
                onClick(button);
              }}
            >
              {button}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

Buttons.prototype = {
  options: PropTypes.array,
  onClickButton: PropTypes.func,
};
