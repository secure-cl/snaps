/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  PublicListVerifier,
  PublicListVerifierInterface,
} from "../../../contracts/Verifiers/PublicListVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "domainHash",
        type: "bytes32",
      },
    ],
    name: "AccountIsNotDomainOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "domainHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
    ],
    name: "AddressAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "domainHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
    ],
    name: "AddressRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domainHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "addAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domainHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "isVerified",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domainHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "removeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sci",
    outputs: [
      {
        internalType: "contract SCI",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "verifiedContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161099a38038061099a833981810160405281019061003291906100dd565b80806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061010a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100aa8261007f565b9050919050565b6100ba8161009f565b81146100c557600080fd5b50565b6000815190506100d7816100b1565b92915050565b6000602082840312156100f3576100f261007a565b5b6000610101848285016100c8565b91505092915050565b610881806101196000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631f15ffd11461005c57806354d35dcc1461007857806379fb477a146100965780637d4181b4146100c6578063f2ce2ee9146100e2575b600080fd5b61007660048036038101906100719190610636565b610112565b005b6100806101f3565b60405161008d91906106e8565b60405180910390f35b6100b060048036038101906100ab9190610703565b610217565b6040516100bd9190610771565b60405180910390f35b6100e060048036038101906100db9190610636565b610253565b005b6100fc60048036038101906100f79190610636565b610333565b6040516101099190610771565b60405180910390f35b8261011c81610443565b60006001600086815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1683857f36be184145fbd476ffe0597f987f89d7490b926e334512a42de54749eee25e756101d861055f565b6040516101e5919061079b565b60405180910390a450505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001602052826000526040600020602052816000526040600020602052806000526040600020600092509250509054906101000a900460ff1681565b8261025d81610443565b600180600086815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1683857fc177490b924686771eb8a2b77bee53e5913e624c90b60207d396f81cfe6e7cd061031861055f565b604051610325919061079b565b60405180910390a450505050565b60006001600085815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060009054906101000a900460ff168061043a57506001600085815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff815260200190815260200160002060009054906101000a900460ff165b90509392505050565b61044b61055f565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d26cdd20836040518263ffffffff1660e01b81526004016104ba91906107c5565b602060405180830381865afa1580156104d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fb91906107f5565b73ffffffffffffffffffffffffffffffffffffffff161461055c5761051e61055f565b816040517f2ebb0ef6000000000000000000000000000000000000000000000000000000008152600401610553929190610822565b60405180910390fd5b50565b600033905090565b600080fd5b6000819050919050565b61057f8161056c565b811461058a57600080fd5b50565b60008135905061059c81610576565b92915050565b6000819050919050565b6105b5816105a2565b81146105c057600080fd5b50565b6000813590506105d2816105ac565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610603826105d8565b9050919050565b610613816105f8565b811461061e57600080fd5b50565b6000813590506106308161060a565b92915050565b60008060006060848603121561064f5761064e610567565b5b600061065d8682870161058d565b935050602061066e868287016105c3565b925050604061067f86828701610621565b9150509250925092565b6000819050919050565b60006106ae6106a96106a4846105d8565b610689565b6105d8565b9050919050565b60006106c082610693565b9050919050565b60006106d2826106b5565b9050919050565b6106e2816106c7565b82525050565b60006020820190506106fd60008301846106d9565b92915050565b60008060006060848603121561071c5761071b610567565b5b600061072a8682870161058d565b935050602061073b86828701610621565b925050604061074c868287016105c3565b9150509250925092565b60008115159050919050565b61076b81610756565b82525050565b60006020820190506107866000830184610762565b92915050565b610795816105f8565b82525050565b60006020820190506107b0600083018461078c565b92915050565b6107bf8161056c565b82525050565b60006020820190506107da60008301846107b6565b92915050565b6000815190506107ef8161060a565b92915050565b60006020828403121561080b5761080a610567565b5b6000610819848285016107e0565b91505092915050565b6000604082019050610837600083018561078c565b61084460208301846107b6565b939250505056fea2646970667358221220bfb1ca9f3640fe8c671ce72e3a13847b6e4e53208c549d2b88ab2b29e9fd533864736f6c63430008140033";

type PublicListVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PublicListVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PublicListVerifier__factory extends ContractFactory {
  constructor(...args: PublicListVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_registry, overrides || {});
  }
  override deploy(
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_registry, overrides || {}) as Promise<
      PublicListVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PublicListVerifier__factory {
    return super.connect(runner) as PublicListVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PublicListVerifierInterface {
    return new Interface(_abi) as PublicListVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PublicListVerifier {
    return new Contract(address, _abi, runner) as unknown as PublicListVerifier;
  }
}