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

export class SwapFeeModified extends ethereum.Event {
  get params(): SwapFeeModified__Params {
    return new SwapFeeModified__Params(this);
  }
}

export class SwapFeeModified__Params {
  _event: SwapFeeModified;

  constructor(event: SwapFeeModified) {
    this._event = event;
  }

  get swapFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Swapped extends ethereum.Event {
  get params(): Swapped__Params {
    return new Swapped__Params(this);
  }
}

export class Swapped__Params {
  _event: Swapped;

  constructor(event: Swapped) {
    this._event = event;
  }

  get inAsset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get outAsset(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get inAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get outAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get auxiliaryData(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class ClipperExchangeInterface__calculateSwapAmountResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class ClipperExchangeInterface extends ethereum.SmartContract {
  static bind(address: Address): ClipperExchangeInterface {
    return new ClipperExchangeInterface("ClipperExchangeInterface", address);
  }

  approvalContract(): Address {
    let result = super.call(
      "approvalContract",
      "approvalContract():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_approvalContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "approvalContract",
      "approvalContract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  calculateSwapAmount(
    inputToken: Address,
    outputToken: Address,
    totalInputToken: BigInt
  ): ClipperExchangeInterface__calculateSwapAmountResult {
    let result = super.call(
      "calculateSwapAmount",
      "calculateSwapAmount(address,address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(inputToken),
        ethereum.Value.fromAddress(outputToken),
        ethereum.Value.fromUnsignedBigInt(totalInputToken)
      ]
    );

    return new ClipperExchangeInterface__calculateSwapAmountResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_calculateSwapAmount(
    inputToken: Address,
    outputToken: Address,
    totalInputToken: BigInt
  ): ethereum.CallResult<ClipperExchangeInterface__calculateSwapAmountResult> {
    let result = super.tryCall(
      "calculateSwapAmount",
      "calculateSwapAmount(address,address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(inputToken),
        ethereum.Value.fromAddress(outputToken),
        ethereum.Value.fromUnsignedBigInt(totalInputToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ClipperExchangeInterface__calculateSwapAmountResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getSellQuote(
    inputToken: Address,
    outputToken: Address,
    sellAmount: BigInt
  ): BigInt {
    let result = super.call(
      "getSellQuote",
      "getSellQuote(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(inputToken),
        ethereum.Value.fromAddress(outputToken),
        ethereum.Value.fromUnsignedBigInt(sellAmount)
      ]
    );

    return result[0].toBigInt();
  }

  try_getSellQuote(
    inputToken: Address,
    outputToken: Address,
    sellAmount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSellQuote",
      "getSellQuote(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(inputToken),
        ethereum.Value.fromAddress(outputToken),
        ethereum.Value.fromUnsignedBigInt(sellAmount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  invariant(): BigInt {
    let result = super.call("invariant", "invariant():(uint256)", []);

    return result[0].toBigInt();
  }

  try_invariant(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("invariant", "invariant():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  sellTokenForEth(
    inputToken: Address,
    recipient: Address,
    minBuyAmount: BigInt,
    auxiliaryData: Bytes
  ): BigInt {
    let result = super.call(
      "sellTokenForEth",
      "sellTokenForEth(address,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(inputToken),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(minBuyAmount),
        ethereum.Value.fromBytes(auxiliaryData)
      ]
    );

    return result[0].toBigInt();
  }

  try_sellTokenForEth(
    inputToken: Address,
    recipient: Address,
    minBuyAmount: BigInt,
    auxiliaryData: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sellTokenForEth",
      "sellTokenForEth(address,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(inputToken),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(minBuyAmount),
        ethereum.Value.fromBytes(auxiliaryData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sellTokenForToken(
    inputToken: Address,
    outputToken: Address,
    recipient: Address,
    minBuyAmount: BigInt,
    auxiliaryData: Bytes
  ): BigInt {
    let result = super.call(
      "sellTokenForToken",
      "sellTokenForToken(address,address,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(inputToken),
        ethereum.Value.fromAddress(outputToken),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(minBuyAmount),
        ethereum.Value.fromBytes(auxiliaryData)
      ]
    );

    return result[0].toBigInt();
  }

  try_sellTokenForToken(
    inputToken: Address,
    outputToken: Address,
    recipient: Address,
    minBuyAmount: BigInt,
    auxiliaryData: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sellTokenForToken",
      "sellTokenForToken(address,address,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(inputToken),
        ethereum.Value.fromAddress(outputToken),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(minBuyAmount),
        ethereum.Value.fromBytes(auxiliaryData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swapFee(): BigInt {
    let result = super.call("swapFee", "swapFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_swapFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("swapFee", "swapFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  theExchange(): Address {
    let result = super.call("theExchange", "theExchange():(address)", []);

    return result[0].toAddress();
  }

  try_theExchange(): ethereum.CallResult<Address> {
    let result = super.tryCall("theExchange", "theExchange():(address)", []);
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

  get initialApprovalContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get initialSwapFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ModifyApprovalContractCall extends ethereum.Call {
  get inputs(): ModifyApprovalContractCall__Inputs {
    return new ModifyApprovalContractCall__Inputs(this);
  }

  get outputs(): ModifyApprovalContractCall__Outputs {
    return new ModifyApprovalContractCall__Outputs(this);
  }
}

export class ModifyApprovalContractCall__Inputs {
  _call: ModifyApprovalContractCall;

  constructor(call: ModifyApprovalContractCall) {
    this._call = call;
  }

  get newApprovalContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ModifyApprovalContractCall__Outputs {
  _call: ModifyApprovalContractCall;

  constructor(call: ModifyApprovalContractCall) {
    this._call = call;
  }
}

export class ModifySwapFeeCall extends ethereum.Call {
  get inputs(): ModifySwapFeeCall__Inputs {
    return new ModifySwapFeeCall__Inputs(this);
  }

  get outputs(): ModifySwapFeeCall__Outputs {
    return new ModifySwapFeeCall__Outputs(this);
  }
}

export class ModifySwapFeeCall__Inputs {
  _call: ModifySwapFeeCall;

  constructor(call: ModifySwapFeeCall) {
    this._call = call;
  }

  get newSwapFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ModifySwapFeeCall__Outputs {
  _call: ModifySwapFeeCall;

  constructor(call: ModifySwapFeeCall) {
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

export class SellEthForTokenCall extends ethereum.Call {
  get inputs(): SellEthForTokenCall__Inputs {
    return new SellEthForTokenCall__Inputs(this);
  }

  get outputs(): SellEthForTokenCall__Outputs {
    return new SellEthForTokenCall__Outputs(this);
  }
}

export class SellEthForTokenCall__Inputs {
  _call: SellEthForTokenCall;

  constructor(call: SellEthForTokenCall) {
    this._call = call;
  }

  get outputToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get minBuyAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get auxiliaryData(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SellEthForTokenCall__Outputs {
  _call: SellEthForTokenCall;

  constructor(call: SellEthForTokenCall) {
    this._call = call;
  }

  get boughtAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SellTokenForEthCall extends ethereum.Call {
  get inputs(): SellTokenForEthCall__Inputs {
    return new SellTokenForEthCall__Inputs(this);
  }

  get outputs(): SellTokenForEthCall__Outputs {
    return new SellTokenForEthCall__Outputs(this);
  }
}

export class SellTokenForEthCall__Inputs {
  _call: SellTokenForEthCall;

  constructor(call: SellTokenForEthCall) {
    this._call = call;
  }

  get inputToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get minBuyAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get auxiliaryData(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SellTokenForEthCall__Outputs {
  _call: SellTokenForEthCall;

  constructor(call: SellTokenForEthCall) {
    this._call = call;
  }

  get boughtAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SellTokenForTokenCall extends ethereum.Call {
  get inputs(): SellTokenForTokenCall__Inputs {
    return new SellTokenForTokenCall__Inputs(this);
  }

  get outputs(): SellTokenForTokenCall__Outputs {
    return new SellTokenForTokenCall__Outputs(this);
  }
}

export class SellTokenForTokenCall__Inputs {
  _call: SellTokenForTokenCall;

  constructor(call: SellTokenForTokenCall) {
    this._call = call;
  }

  get inputToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get outputToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get minBuyAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get auxiliaryData(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SellTokenForTokenCall__Outputs {
  _call: SellTokenForTokenCall;

  constructor(call: SellTokenForTokenCall) {
    this._call = call;
  }

  get boughtAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetPoolAddressCall extends ethereum.Call {
  get inputs(): SetPoolAddressCall__Inputs {
    return new SetPoolAddressCall__Inputs(this);
  }

  get outputs(): SetPoolAddressCall__Outputs {
    return new SetPoolAddressCall__Outputs(this);
  }
}

export class SetPoolAddressCall__Inputs {
  _call: SetPoolAddressCall;

  constructor(call: SetPoolAddressCall) {
    this._call = call;
  }

  get poolAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPoolAddressCall__Outputs {
  _call: SetPoolAddressCall;

  constructor(call: SetPoolAddressCall) {
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

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawAllCall extends ethereum.Call {
  get inputs(): WithdrawAllCall__Inputs {
    return new WithdrawAllCall__Inputs(this);
  }

  get outputs(): WithdrawAllCall__Outputs {
    return new WithdrawAllCall__Outputs(this);
  }
}

export class WithdrawAllCall__Inputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}

export class WithdrawAllCall__Outputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}

export class WithdrawIntoCall extends ethereum.Call {
  get inputs(): WithdrawIntoCall__Inputs {
    return new WithdrawIntoCall__Inputs(this);
  }

  get outputs(): WithdrawIntoCall__Outputs {
    return new WithdrawIntoCall__Outputs(this);
  }
}

export class WithdrawIntoCall__Inputs {
  _call: WithdrawIntoCall;

  constructor(call: WithdrawIntoCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get outputToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get outputTokenAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawIntoCall__Outputs {
  _call: WithdrawIntoCall;

  constructor(call: WithdrawIntoCall) {
    this._call = call;
  }
}
