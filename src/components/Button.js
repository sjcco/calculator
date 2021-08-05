import PropTypes from 'prop-types';

const Button = props => {
  const { name, btnType, clickHandler } = props;
  return (
    <>
      <button type="button" className={btnType} onClick={() => clickHandler(name)}>
        { name }
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  btnType: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  btnType: 'number',
};

export default Button;
