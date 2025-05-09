import { FlexPlugin } from '@twilio/flex-plugin';
import CRMProfileContainer from './components/CRMProfileContainer';
import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';

const PLUGIN_NAME = 'CustomerProfileIntegrator';

const CRMProfileContainerWithTask = withTaskContext((props) => {
  console.log('CRMProfileContainerWithTask rendering, props:', props);
  return props.task ? <CRMProfileContainer task={props.task} /> : <div>Waiting for task...</div>;
});

export default class CustomerProfileIntegrator extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
    console.log('CustomerProfileIntegrator constructor called');
  }

  init(flex, manager) {
    console.log('CustomerProfileIntegrator init called');
    flex.CRMContainer.Content.replace(
      <CRMProfileContainerWithTask key="connie-profile-container" />,
      { sortOrder: 1 }
    );
    console.log('CRMContainer replaced with CRMProfileContainerWithTask');
  }
}