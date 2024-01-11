// https://www.npmjs.com/package/prop-types

import PropTypes from "prop-types"; // ES6

function Button({ text }) {
  return <button>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
  // text: PropTypes.string.isRequired
};

root.render(
  <>
    <Button text="Click me" />
    <Button text="Pay" />
    <Button text={{ text: "hello" }} /> {/* Error */}
  </>
);
