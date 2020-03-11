import React from 'react';
import PropTypes from 'prop-types';

const AveLeaseRate = props => {
  const aveRate = props.items.map(item => {
    return parseFloat(item.lease_rate_annual);
  });
const aveRateReduced = aveRate.reduce((a,b) => (a+b)/2, 0)
  return <React.Fragment>
      {aveRateReduced}
  </React.Fragment>;
};

AveLeaseRate.propTypes = {
    items: PropTypes.object
};

export default AveLeaseRate;
