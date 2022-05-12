// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BlockMinted extends ethereum.Event {
  get params(): BlockMinted__Params {
    return new BlockMinted__Params(this);
  }
}

export class BlockMinted__Params {
  _event: BlockMinted;

  constructor(event: BlockMinted) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get staked(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class NFT extends ethereum.SmartContract {
  static bind(address: Address): NFT {
    return new NFT("NFT", address);
  }

  MAX_BLOCKS(): BigInt {
    let result = super.call("MAX_BLOCKS", "MAX_BLOCKS():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_BLOCKS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_BLOCKS", "MAX_BLOCKS():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_BLOCKS_PER_ADDRESS(): BigInt {
    let result = super.call(
      "MAX_BLOCKS_PER_ADDRESS",
      "MAX_BLOCKS_PER_ADDRESS():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_BLOCKS_PER_ADDRESS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_BLOCKS_PER_ADDRESS",
      "MAX_BLOCKS_PER_ADDRESS():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRICE(): BigInt {
    let result = super.call("PRICE", "PRICE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PRICE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PRICE", "PRICE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseTokenURI(): string {
    let result = super.call("baseTokenURI", "baseTokenURI():(string)", []);

    return result[0].toString();
  }

  try_baseTokenURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseTokenURI", "baseTokenURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  checkWhitelist(): boolean {
    let result = super.call("checkWhitelist", "checkWhitelist():(bool)", []);

    return result[0].toBoolean();
  }

  try_checkWhitelist(): ethereum.CallResult<boolean> {
    let result = super.tryCall("checkWhitelist", "checkWhitelist():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getBlockScore(tokenId: BigInt): BigInt {
    let result = super.call(
      "getBlockScore",
      "getBlockScore(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toBigInt();
  }

  try_getBlockScore(tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBlockScore",
      "getBlockScore(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getHoodBoost(tokenIds: Array<BigInt>): BigInt {
    let result = super.call(
      "getHoodBoost",
      "getHoodBoost(uint256[]):(uint256)",
      [ethereum.Value.fromUnsignedBigIntArray(tokenIds)]
    );

    return result[0].toBigInt();
  }

  try_getHoodBoost(tokenIds: Array<BigInt>): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getHoodBoost",
      "getHoodBoost(uint256[]):(uint256)",
      [ethereum.Value.fromUnsignedBigIntArray(tokenIds)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  saleActive(): boolean {
    let result = super.call("saleActive", "saleActive():(bool)", []);

    return result[0].toBoolean();
  }

  try_saleActive(): ethereum.CallResult<boolean> {
    let result = super.tryCall("saleActive", "saleActive():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  signerAddress(): Address {
    let result = super.call("signerAddress", "signerAddress():(address)", []);

    return result[0].toAddress();
  }

  try_signerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "signerAddress",
      "signerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokensOfOwner(owner: Address): Array<BigInt> {
    let result = super.call(
      "tokensOfOwner",
      "tokensOfOwner(address):(uint256[])",
      [ethereum.Value.fromAddress(owner)]
    );

    return result[0].toBigIntArray();
  }

  try_tokensOfOwner(owner: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "tokensOfOwner",
      "tokensOfOwner(address):(uint256[])",
      [ethereum.Value.fromAddress(owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  verifyHash(hash: Bytes, signatureR: Bytes, signatureVS: Bytes): Address {
    let result = super.call(
      "verifyHash",
      "verifyHash(bytes32,bytes32,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(hash),
        ethereum.Value.fromFixedBytes(signatureR),
        ethereum.Value.fromFixedBytes(signatureVS)
      ]
    );

    return result[0].toAddress();
  }

  try_verifyHash(
    hash: Bytes,
    signatureR: Bytes,
    signatureVS: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "verifyHash",
      "verifyHash(bytes32,bytes32,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(hash),
        ethereum.Value.fromFixedBytes(signatureR),
        ethereum.Value.fromFixedBytes(signatureVS)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class DisableWhitelistCall extends ethereum.Call {
  get inputs(): DisableWhitelistCall__Inputs {
    return new DisableWhitelistCall__Inputs(this);
  }

  get outputs(): DisableWhitelistCall__Outputs {
    return new DisableWhitelistCall__Outputs(this);
  }
}

export class DisableWhitelistCall__Inputs {
  _call: DisableWhitelistCall;

  constructor(call: DisableWhitelistCall) {
    this._call = call;
  }
}

export class DisableWhitelistCall__Outputs {
  _call: DisableWhitelistCall;

  constructor(call: DisableWhitelistCall) {
    this._call = call;
  }
}

export class EnableWhitelistCall extends ethereum.Call {
  get inputs(): EnableWhitelistCall__Inputs {
    return new EnableWhitelistCall__Inputs(this);
  }

  get outputs(): EnableWhitelistCall__Outputs {
    return new EnableWhitelistCall__Outputs(this);
  }
}

export class EnableWhitelistCall__Inputs {
  _call: EnableWhitelistCall;

  constructor(call: EnableWhitelistCall) {
    this._call = call;
  }
}

export class EnableWhitelistCall__Outputs {
  _call: EnableWhitelistCall;

  constructor(call: EnableWhitelistCall) {
    this._call = call;
  }
}

export class MintNFTCall extends ethereum.Call {
  get inputs(): MintNFTCall__Inputs {
    return new MintNFTCall__Inputs(this);
  }

  get outputs(): MintNFTCall__Outputs {
    return new MintNFTCall__Outputs(this);
  }
}

export class MintNFTCall__Inputs {
  _call: MintNFTCall;

  constructor(call: MintNFTCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get stake(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class MintNFTCall__Outputs {
  _call: MintNFTCall;

  constructor(call: MintNFTCall) {
    this._call = call;
  }
}

export class MintNFTWhitelistCall extends ethereum.Call {
  get inputs(): MintNFTWhitelistCall__Inputs {
    return new MintNFTWhitelistCall__Inputs(this);
  }

  get outputs(): MintNFTWhitelistCall__Outputs {
    return new MintNFTWhitelistCall__Outputs(this);
  }
}

export class MintNFTWhitelistCall__Inputs {
  _call: MintNFTWhitelistCall;

  constructor(call: MintNFTWhitelistCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get signatureR(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get signatureVS(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get stake(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class MintNFTWhitelistCall__Outputs {
  _call: MintNFTWhitelistCall;

  constructor(call: MintNFTWhitelistCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetProxyRegistryAddressCall extends ethereum.Call {
  get inputs(): SetProxyRegistryAddressCall__Inputs {
    return new SetProxyRegistryAddressCall__Inputs(this);
  }

  get outputs(): SetProxyRegistryAddressCall__Outputs {
    return new SetProxyRegistryAddressCall__Outputs(this);
  }
}

export class SetProxyRegistryAddressCall__Inputs {
  _call: SetProxyRegistryAddressCall;

  constructor(call: SetProxyRegistryAddressCall) {
    this._call = call;
  }

  get _proxyRegistryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetProxyRegistryAddressCall__Outputs {
  _call: SetProxyRegistryAddressCall;

  constructor(call: SetProxyRegistryAddressCall) {
    this._call = call;
  }
}

export class SetScoresCall extends ethereum.Call {
  get inputs(): SetScoresCall__Inputs {
    return new SetScoresCall__Inputs(this);
  }

  get outputs(): SetScoresCall__Outputs {
    return new SetScoresCall__Outputs(this);
  }
}

export class SetScoresCall__Inputs {
  _call: SetScoresCall;

  constructor(call: SetScoresCall) {
    this._call = call;
  }

  get _scoresAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetScoresCall__Outputs {
  _call: SetScoresCall;

  constructor(call: SetScoresCall) {
    this._call = call;
  }
}

export class SetSignerAddressCall extends ethereum.Call {
  get inputs(): SetSignerAddressCall__Inputs {
    return new SetSignerAddressCall__Inputs(this);
  }

  get outputs(): SetSignerAddressCall__Outputs {
    return new SetSignerAddressCall__Outputs(this);
  }
}

export class SetSignerAddressCall__Inputs {
  _call: SetSignerAddressCall;

  constructor(call: SetSignerAddressCall) {
    this._call = call;
  }

  get signer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSignerAddressCall__Outputs {
  _call: SetSignerAddressCall;

  constructor(call: SetSignerAddressCall) {
    this._call = call;
  }
}

export class SetVaultCall extends ethereum.Call {
  get inputs(): SetVaultCall__Inputs {
    return new SetVaultCall__Inputs(this);
  }

  get outputs(): SetVaultCall__Outputs {
    return new SetVaultCall__Outputs(this);
  }
}

export class SetVaultCall__Inputs {
  _call: SetVaultCall;

  constructor(call: SetVaultCall) {
    this._call = call;
  }

  get _vaultAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetVaultCall__Outputs {
  _call: SetVaultCall;

  constructor(call: SetVaultCall) {
    this._call = call;
  }
}

export class StartSaleCall extends ethereum.Call {
  get inputs(): StartSaleCall__Inputs {
    return new StartSaleCall__Inputs(this);
  }

  get outputs(): StartSaleCall__Outputs {
    return new StartSaleCall__Outputs(this);
  }
}

export class StartSaleCall__Inputs {
  _call: StartSaleCall;

  constructor(call: StartSaleCall) {
    this._call = call;
  }
}

export class StartSaleCall__Outputs {
  _call: StartSaleCall;

  constructor(call: StartSaleCall) {
    this._call = call;
  }
}

export class StopSaleCall extends ethereum.Call {
  get inputs(): StopSaleCall__Inputs {
    return new StopSaleCall__Inputs(this);
  }

  get outputs(): StopSaleCall__Outputs {
    return new StopSaleCall__Outputs(this);
  }
}

export class StopSaleCall__Inputs {
  _call: StopSaleCall;

  constructor(call: StopSaleCall) {
    this._call = call;
  }
}

export class StopSaleCall__Outputs {
  _call: StopSaleCall;

  constructor(call: StopSaleCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}