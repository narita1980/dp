#!/usr/bin/env node
'use strict'

import devKitJs from '@devprtcl/dev-kit-js'
import Web3 from 'web3'

const [, , propertyAddress, userAddress] = process.argv;

(async () => {
    const web3 = new Web3(process.env.WEB3_PROVIDER)
    const devProtocol = devKitJs.contractFactory(web3)
    const registry = devProtocol.registry(devKitJs.addresses.eth.main.registry)
    const lockup = devProtocol.lockup(await registry.lockup())

    lockup.calculateWithdrawableInterestAmount(propertyAddress, userAddress).then(console.log)
})();
