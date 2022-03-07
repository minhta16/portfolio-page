import React from 'react';
import BaseModal from './BaseModal';

export const HumanaModal = props => {
  return (
    <BaseModal {...props}>
      <h2 className="text-uppercase">Author by Humana</h2>
      <p className="item-intro text-muted">June 2021 - Present</p>
    </BaseModal>
  );
};
