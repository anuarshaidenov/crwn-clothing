import React from 'react';

import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="collection-preview__title">{title}</h1>
    <div className="collection-preview__preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem id={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
