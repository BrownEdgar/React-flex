import React from 'react';
import { FormattedMessage } from 'react-intl';

const Illustration = () => {
  return (
    <div className="page-content">
      <h1>
        <FormattedMessage id="illustrationTitle" />
      </h1>
      <p>
        <FormattedMessage id="illustrationContent" />
      </p>
    </div>
  );
};

export default Illustration;
