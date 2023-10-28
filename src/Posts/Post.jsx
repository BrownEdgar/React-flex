import React from 'react';
import { FormattedMessage } from 'react-intl';

const Post = ({ contentKey, titleKey }) => {
  return (
    <div className="post-container">
      <h1 className="post-title">
        <FormattedMessage id={titleKey} />
      </h1>
      <p className="post-content">
        <FormattedMessage id={contentKey} />
      </p>
    </div>
  );
};

export default Post;




