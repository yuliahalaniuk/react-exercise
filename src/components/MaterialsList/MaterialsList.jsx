import React from 'react';
import Material from '../Material/Material';

const MaterialsList = ({ items, ...otherProps }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Material item={item} {...otherProps} />
      </li>
    ))}
  </ul>
);

export default MaterialsList;
