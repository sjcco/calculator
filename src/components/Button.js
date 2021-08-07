import PropTypes from 'prop-types';

const Button = props => {
  const {
    name,
    btnColor,
    clickHandler,
    wide,
  } = props;
  return (
    <>
      <button type="button" className={wide ? `button ${btnColor} zero` : `button ${btnColor}`} onClick={() => clickHandler(name)}>
        { name }
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  btnColor: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool.isRequired,
};

export default Button;
