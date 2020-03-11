import React from 'react';
import PropTypes from 'prop-types';

const TotalValue = props => {
  const valuesOfLeases = props.items.map(row => {
    return parseInt(row.net_lease_price);
  });
  const totalValue = valuesOfLeases.reduce((a, b) => a + b, 0);

  return <React.Fragment>{totalValue}</React.Fragment>;
};

TotalValue.propTypes = {
    items: PropTypes.object
};

export default TotalValue;
