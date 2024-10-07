{
  /** Importing.
   * ES6: import PropTypes from "prop-types";
   * ES5: var PropTypes = require("prop-types");
   */
}

import PropTypes from "prop-types";

export default function Button({ text }) {
  return <button>{text}</button>;
}

{
  /* Define the PropTypes for the 'Button' component */
}
Button.propTypes = {
  text: PropTypes.string,
  text: PropTypes.string.isRequired,
};
