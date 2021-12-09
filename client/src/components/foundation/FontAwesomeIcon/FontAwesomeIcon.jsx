import React from 'react';
import { FontAwesomeIcon as ReactFontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * @typedef {object} Props
 * @property {string} iconType
 * @property {'solid' | 'regular'} styleType
 */

/** @type {React.VFC<Props>} */
const FontAwesomeIcon = ({ iconType, styleType }) => {
  return (
    <svg className="font-awesome inline-block leading-none fill-current">
      <ReactFontAwesomeIcon icon={[styleType === 'solid' ? 'fas' : 'far', iconType]}></ReactFontAwesomeIcon>
    </svg>
  );
};

export { FontAwesomeIcon };
