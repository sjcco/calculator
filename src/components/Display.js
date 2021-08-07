import PropTypes from 'prop-types';

const Display = props => {
  const { result, operation } = props;
  return (
    <div className="display skin">
      <p>{ operation }</p>
      <p>{ result }</p>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  operation: '',
};

export default Display;
