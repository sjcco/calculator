import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = btnName => clickHandler(btnName);
  return (
    <div className="button-panel skin">
      <div className="btn-group">
        <Button wide={false} btnColor="bg-gray" name="AC" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-gray" name="+/-" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-gray" name="%" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-orange" name="÷" clickHandler={handleClick} />
      </div>
      <div className="btn-group">
        <Button wide={false} btnColor="bg-gray" name="7" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-gray" name="8" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-gray" name="9" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-orange" name="x" clickHandler={handleClick} />
      </div>
      <div className="btn-group">
        <Button wide={false} btnColor="bg-gray" name="4" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-gray" name="5" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-gray" name="6" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-orange" name="-" clickHandler={handleClick} />
      </div>
      <div className="btn-group">
        <Button wide={false} btnColor="bg-gray" name="1" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-gray" name="2" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-gray" name="3" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-orange" name="+" clickHandler={handleClick} />
      </div>
      <div className="btn-group">
        <Button wide btnColor="bg-gray" name="0" clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-gray" name="." clickHandler={handleClick} />
        <Button wide={false} btnColor="bg-orange" name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
