import { FlexPlugin } from '@twilio/flex-plugin';
import CustomerProfileIntegrator from './CustomerProfileIntegrator';
import type * as Flex from '@twilio/flex-ui';

const PLUGIN_NAME = 'CustomerProfileIntegrator';

export default class CustomerProfileIntegratorPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  init(flex: typeof import('@twilio/flex-ui'), manager: Flex.Manager) {
    const customerProfileIntegrator: CustomerProfileIntegrator = new CustomerProfileIntegrator();
    customerProfileIntegrator.init(flex, manager);
  }
}

// Add this line to load your plugin
import { loadPlugin } from '@twilio/flex-plugin';
loadPlugin(CustomerProfileIntegratorPlugin);
