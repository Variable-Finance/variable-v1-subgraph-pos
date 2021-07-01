import { Merchant } from "../generated/Merchant/Merchant"
import { Payment } from "../generated/POS/POS"
import { Sales } from "../generated/schema"

export function handleCreateMerchant(event: Payment): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Sales.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new Sales(event.transaction.hash.toHex())
  }

  entity.merchant = event.params.merchant
  entity.customer = event.params.from
  entity.amount = event.params.amount;
  entity.token = event.params.token;
  entity.timestamp = event.block.timestamp;

  // Entities can be written to the store with `.save()`
  entity.save()
}
