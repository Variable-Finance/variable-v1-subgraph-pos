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

export class Payment extends ethereum.Event {
  get params(): Payment__Params {
    return new Payment__Params(this);
  }
}

export class Payment__Params {
  _event: Payment;

  constructor(event: Payment) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get merchant(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get token(): string {
    return this._event.parameters[3].value.toString();
  }

  get notes(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class POS__paymentResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class POS extends ethereum.SmartContract {
  static bind(address: Address): POS {
    return new POS("POS", address);
  }

  fetchApproval(_ticker: string, _holder: Address): BigInt {
    let result = super.call(
      "fetchApproval",
      "fetchApproval(string,address):(uint256)",
      [ethereum.Value.fromString(_ticker), ethereum.Value.fromAddress(_holder)]
    );

    return result[0].toBigInt();
  }

  try_fetchApproval(
    _ticker: string,
    _holder: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fetchApproval",
      "fetchApproval(string,address):(uint256)",
      [ethereum.Value.fromString(_ticker), ethereum.Value.fromAddress(_holder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fetchContract(_ticker: string): Address {
    let result = super.call(
      "fetchContract",
      "fetchContract(string):(address)",
      [ethereum.Value.fromString(_ticker)]
    );

    return result[0].toAddress();
  }

  try_fetchContract(_ticker: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "fetchContract",
      "fetchContract(string):(address)",
      [ethereum.Value.fromString(_ticker)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  markAsStablecoin(_ticker: string): boolean {
    let result = super.call(
      "markAsStablecoin",
      "markAsStablecoin(string):(bool)",
      [ethereum.Value.fromString(_ticker)]
    );

    return result[0].toBoolean();
  }

  try_markAsStablecoin(_ticker: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "markAsStablecoin",
      "markAsStablecoin(string):(bool)",
      [ethereum.Value.fromString(_ticker)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  merchantOracle(): Address {
    let result = super.call("merchantOracle", "merchantOracle():(address)", []);

    return result[0].toAddress();
  }

  try_merchantOracle(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "merchantOracle",
      "merchantOracle():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  payment(
    _pointer: string,
    _ticker: string,
    _notes: string,
    _usd: BigInt
  ): POS__paymentResult {
    let result = super.call(
      "payment",
      "payment(string,string,string,uint256):(bool,uint256)",
      [
        ethereum.Value.fromString(_pointer),
        ethereum.Value.fromString(_ticker),
        ethereum.Value.fromString(_notes),
        ethereum.Value.fromUnsignedBigInt(_usd)
      ]
    );

    return new POS__paymentResult(result[0].toBoolean(), result[1].toBigInt());
  }

  try_payment(
    _pointer: string,
    _ticker: string,
    _notes: string,
    _usd: BigInt
  ): ethereum.CallResult<POS__paymentResult> {
    let result = super.tryCall(
      "payment",
      "payment(string,string,string,uint256):(bool,uint256)",
      [
        ethereum.Value.fromString(_pointer),
        ethereum.Value.fromString(_ticker),
        ethereum.Value.fromString(_notes),
        ethereum.Value.fromUnsignedBigInt(_usd)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new POS__paymentResult(value[0].toBoolean(), value[1].toBigInt())
    );
  }

  replaceContract(_newAddress: Address, _ticker: string): boolean {
    let result = super.call(
      "replaceContract",
      "replaceContract(address,string):(bool)",
      [
        ethereum.Value.fromAddress(_newAddress),
        ethereum.Value.fromString(_ticker)
      ]
    );

    return result[0].toBoolean();
  }

  try_replaceContract(
    _newAddress: Address,
    _ticker: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "replaceContract",
      "replaceContract(address,string):(bool)",
      [
        ethereum.Value.fromAddress(_newAddress),
        ethereum.Value.fromString(_ticker)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  replaceOracle(_newOracle: Address, _ticker: string): boolean {
    let result = super.call(
      "replaceOracle",
      "replaceOracle(address,string):(bool)",
      [
        ethereum.Value.fromAddress(_newOracle),
        ethereum.Value.fromString(_ticker)
      ]
    );

    return result[0].toBoolean();
  }

  try_replaceOracle(
    _newOracle: Address,
    _ticker: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "replaceOracle",
      "replaceOracle(address,string):(bool)",
      [
        ethereum.Value.fromAddress(_newOracle),
        ethereum.Value.fromString(_ticker)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  resolveAmount(_ticker: string, _usd: BigInt): BigInt {
    let result = super.call(
      "resolveAmount",
      "resolveAmount(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(_ticker),
        ethereum.Value.fromUnsignedBigInt(_usd)
      ]
    );

    return result[0].toBigInt();
  }

  try_resolveAmount(
    _ticker: string,
    _usd: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "resolveAmount",
      "resolveAmount(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(_ticker),
        ethereum.Value.fromUnsignedBigInt(_usd)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  setContract(_contractAddress: Address, _ticker: string): boolean {
    let result = super.call(
      "setContract",
      "setContract(address,string):(bool)",
      [
        ethereum.Value.fromAddress(_contractAddress),
        ethereum.Value.fromString(_ticker)
      ]
    );

    return result[0].toBoolean();
  }

  try_setContract(
    _contractAddress: Address,
    _ticker: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setContract",
      "setContract(address,string):(bool)",
      [
        ethereum.Value.fromAddress(_contractAddress),
        ethereum.Value.fromString(_ticker)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setOracle(_oracleAddress: Address, _ticker: string): boolean {
    let result = super.call("setOracle", "setOracle(address,string):(bool)", [
      ethereum.Value.fromAddress(_oracleAddress),
      ethereum.Value.fromString(_ticker)
    ]);

    return result[0].toBoolean();
  }

  try_setOracle(
    _oracleAddress: Address,
    _ticker: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setOracle",
      "setOracle(address,string):(bool)",
      [
        ethereum.Value.fromAddress(_oracleAddress),
        ethereum.Value.fromString(_ticker)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get _merchantOracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class MarkAsStablecoinCall extends ethereum.Call {
  get inputs(): MarkAsStablecoinCall__Inputs {
    return new MarkAsStablecoinCall__Inputs(this);
  }

  get outputs(): MarkAsStablecoinCall__Outputs {
    return new MarkAsStablecoinCall__Outputs(this);
  }
}

export class MarkAsStablecoinCall__Inputs {
  _call: MarkAsStablecoinCall;

  constructor(call: MarkAsStablecoinCall) {
    this._call = call;
  }

  get _ticker(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class MarkAsStablecoinCall__Outputs {
  _call: MarkAsStablecoinCall;

  constructor(call: MarkAsStablecoinCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class PaymentCall extends ethereum.Call {
  get inputs(): PaymentCall__Inputs {
    return new PaymentCall__Inputs(this);
  }

  get outputs(): PaymentCall__Outputs {
    return new PaymentCall__Outputs(this);
  }
}

export class PaymentCall__Inputs {
  _call: PaymentCall;

  constructor(call: PaymentCall) {
    this._call = call;
  }

  get _pointer(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _ticker(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _notes(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _usd(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class PaymentCall__Outputs {
  _call: PaymentCall;

  constructor(call: PaymentCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }

  get value1(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
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

export class ReplaceContractCall extends ethereum.Call {
  get inputs(): ReplaceContractCall__Inputs {
    return new ReplaceContractCall__Inputs(this);
  }

  get outputs(): ReplaceContractCall__Outputs {
    return new ReplaceContractCall__Outputs(this);
  }
}

export class ReplaceContractCall__Inputs {
  _call: ReplaceContractCall;

  constructor(call: ReplaceContractCall) {
    this._call = call;
  }

  get _newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ticker(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ReplaceContractCall__Outputs {
  _call: ReplaceContractCall;

  constructor(call: ReplaceContractCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ReplaceOracleCall extends ethereum.Call {
  get inputs(): ReplaceOracleCall__Inputs {
    return new ReplaceOracleCall__Inputs(this);
  }

  get outputs(): ReplaceOracleCall__Outputs {
    return new ReplaceOracleCall__Outputs(this);
  }
}

export class ReplaceOracleCall__Inputs {
  _call: ReplaceOracleCall;

  constructor(call: ReplaceOracleCall) {
    this._call = call;
  }

  get _newOracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ticker(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ReplaceOracleCall__Outputs {
  _call: ReplaceOracleCall;

  constructor(call: ReplaceOracleCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetContractCall extends ethereum.Call {
  get inputs(): SetContractCall__Inputs {
    return new SetContractCall__Inputs(this);
  }

  get outputs(): SetContractCall__Outputs {
    return new SetContractCall__Outputs(this);
  }
}

export class SetContractCall__Inputs {
  _call: SetContractCall;

  constructor(call: SetContractCall) {
    this._call = call;
  }

  get _contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ticker(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetContractCall__Outputs {
  _call: SetContractCall;

  constructor(call: SetContractCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetOracleCall extends ethereum.Call {
  get inputs(): SetOracleCall__Inputs {
    return new SetOracleCall__Inputs(this);
  }

  get outputs(): SetOracleCall__Outputs {
    return new SetOracleCall__Outputs(this);
  }
}

export class SetOracleCall__Inputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }

  get _oracleAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ticker(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetOracleCall__Outputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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
