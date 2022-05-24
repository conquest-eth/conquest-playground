import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
import {node_url, accounts, addForkConfiguration} from './utils/network';

const networks = addForkConfiguration({
  hardhat: {
    initialBaseFeePerGas: 0, // to fix : https://github.com/sc-forks/solidity-coverage/issues/652, see https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136
    mining: process.env.MINING_INTERVAL
      ? {
          auto: false,
          interval: process.env.MINING_INTERVAL.split(',').map((v) => parseInt(v)) as [number, number],
        }
      : undefined,
  },
  localhost: {
    url: node_url('localhost'),
    accounts: accounts(),
  },
  dev: {
    url: node_url('gnosis_chain'),
    accounts: accounts('gnosis_chain'),
  },
  quick: {
    url: node_url('goerli'),
    accounts: accounts('goerli'),
  },
  alpha: {
    url: node_url('goerli'),
    accounts: accounts('goerli'),
  },
  forfun: {
    url: node_url('goerli'),
    accounts: accounts('goerli'),
  },
  beta: {
    url: node_url('gnosis_chain'),
    accounts: accounts('gnosis_chain'),
  },
  defcon: {
    url: node_url('gnosis_chain'),
    accounts: accounts('gnosis_chain'),
  },
});

const externalDeployments: {[networkName: string]: string[]} = {};
for (const network of Object.keys(networks)) {
  externalDeployments[network] = [`node_modules/conquest-eth-contracts/export/deployments/${network}`];
}

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
    agentService: {
      hardhat: 1,
      localhost: '0x3bfa2f0888E7d87f9bb044EAE82CEb62290337B4', // see ../agent-service/.env(.default)
      1337: '0x3bfa2f0888E7d87f9bb044EAE82CEb62290337B4', // see ../agent-service/.env(.default)
      defcon: '0x52F0a4CdE745D46212Fb1CBBc44721238036030a',
    },
    claimKeyDistributor: {
      hardhat: 0,
      1337: 0,
      31337: 0,
      4: 2,
      5: 2,
      100: 2,
    },
  },
  networks,
  paths: {
    sources: 'src',
    deploy: ['deploy'],
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  mocha: {
    timeout: 0,
  },
  external: {
    deployments: process.env.HARDHAT_FORK
      ? {
          ...externalDeployments,
          // process.env.HARDHAT_FORK will specify the network that the fork is made from.
          // these lines allow it to fetch the deployments from the network being forked from both for node and deploy task
          hardhat: ['deployments/' + process.env.HARDHAT_FORK],
          localhost: ['deployments/' + process.env.HARDHAT_FORK],
        }
      : externalDeployments,
    contracts: [
      {
        artifacts: 'node_modules/conquest-eth-contracts/export/artifacts',
        deploy: 'node_modules/conquest-eth-contracts/export/deploy_l2',
      },
    ],
  },
};

export default config;
