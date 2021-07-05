import { Address } from "@graphprotocol/graph-ts"
import { Merchant } from "../generated/Merchant/Merchant"
import { Payment } from "../generated/POS/POS"
import { History } from "../generated/schema"

export function handlePayment(event: Payment): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = History.load(event.transaction.hash.toHexString())
  
  let contract = Merchant.bind(Address.fromString("0xb89844126ab8250a239d003e0117b13b62bfdd38"));

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new History(event.transaction.hash.toHex())
  }

  entity.merchant = event.params.merchant
  entity.customer = event.params.from
  entity.amount = event.params.amount
  entity.token = event.params.token
  entity.timestamp = event.block.timestamp

  entity.pointer = contract.merchantInfo(event.params.merchant).value2.toString()

  // Entities can be written to the store with `.save()`
  entity.save()
}
