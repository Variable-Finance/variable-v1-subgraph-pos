import { BigInt } from "@graphprotocol/graph-ts"
import { CreateMerchant } from "../generated/Merchant/Merchant"
import { Seller } from "../generated/schema"

export function handleCreateMerchant(event: CreateMerchant): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Seller.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new Seller(event.transaction.hash.toHex())
  }

  entity.merchant = event.params.merchant
  entity.infohash = event.params.infohash
  entity.pointer = event.params.pointer;
  entity.timestamp = event.block.timestamp;

  // Entities can be written to the store with `.save()`
  entity.save()
}
