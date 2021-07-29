import PropTypes from 'prop-types';

const Button = props => {
  const { name, btnType } = props;
  return (
    <>
      <button type="button" className={btnType}>
        { name }
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  btnType: PropTypes.string,
};

Button.defaultProps = {
  btnType: 'number',
};

export default Button;
