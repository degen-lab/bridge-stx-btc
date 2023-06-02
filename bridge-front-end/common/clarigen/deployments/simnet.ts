export const simnetDeployment = {
  id: 0,
  name: 'Simulated deployment, used as a default for `clarinet console`, `clarinet test` and `clarinet check`',
  network: 'simnet',
  genesis: {
    wallets: [
      {
        name: 'deployer',
        address: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
        balance: '100000000000000',
      },
      {
        name: 'operator',
        address: 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5',
        balance: '100000000000000',
      },
      {
        name: 'swapper',
        address: 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG',
        balance: '100000000000000',
      },
      {
        name: 'wallet_3',
        address: 'ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC',
        balance: '100000000000000',
      },
      {
        name: 'wallet_4',
        address: 'ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND',
        balance: '100000000000000',
      },
      {
        name: 'wallet_5',
        address: 'ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB',
        balance: '100000000000000',
      },
      {
        name: 'wallet_6',
        address: 'ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0',
        balance: '100000000000000',
      },
      {
        name: 'wallet_7',
        address: 'ST3PF13W7Z0RRM42A8VZRVFQ75SV1K26RXEP8YGKJ',
        balance: '100000000000000',
      },
      {
        name: 'wallet_8',
        address: 'ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP',
        balance: '100000000000000',
      },
      {
        name: 'wallet_9',
        address: 'STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6',
        balance: '100000000000000',
      },
    ],
    contracts: ['pox', 'costs-v2', 'bns'],
  },
  plan: {
    batches: [
      {
        id: 0,
        transactions: [
          {
            'emulated-contract-publish': {
              'contract-name': 'ft-trait',
              'emulated-sender': 'SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR',
              path: '.clarinet/SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.ft-trait.clar',
            },
          },
          {
            'emulated-contract-publish': {
              'contract-name': 'restricted-token-trait',
              'emulated-sender': 'SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR',
              path: '.clarinet/SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.restricted-token-trait.clar',
            },
          },
          {
            'emulated-contract-publish': {
              'contract-name': 'Wrapped-Bitcoin',
              'emulated-sender': 'SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR',
              path: '.clarinet/SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin.clar',
            },
          },
          {
            'emulated-contract-publish': {
              'contract-name': 'test-utils',
              'emulated-sender': 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
              path: 'contracts/test/test-utils.clar',
            },
          },
          {
            'emulated-contract-publish': {
              'contract-name': 'clarity-bitcoin',
              'emulated-sender': 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
              path: 'contracts/test/clarity-bitcoin.clar',
            },
          },
          {
            'emulated-contract-publish': {
              'contract-name': 'bridge',
              'emulated-sender': 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
              path: 'contracts/bridge.clar',
            },
          },
          {
            'emulated-contract-publish': {
              'contract-name': 'supplier-wrapper',
              'emulated-sender': 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
              path: 'contracts/supplier-wrapper.clar',
            },
          },
        ],
      },
    ],
  },
} as const;
