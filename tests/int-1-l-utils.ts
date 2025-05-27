import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  DepositCanceled,
  DepositLeafInserted,
  Deposited,
  DepositsAnalyzedAndProcessed,
  Initialized,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Upgraded,
  Withdrawn
} from "../generated/Int1L/Int1L"

export function createDepositCanceledEvent(depositId: BigInt): DepositCanceled {
  let depositCanceledEvent = changetype<DepositCanceled>(newMockEvent())

  depositCanceledEvent.parameters = new Array()

  depositCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "depositId",
      ethereum.Value.fromUnsignedBigInt(depositId)
    )
  )

  return depositCanceledEvent
}

export function createDepositLeafInsertedEvent(
  depositIndex: BigInt,
  depositHash: Bytes
): DepositLeafInserted {
  let depositLeafInsertedEvent = changetype<DepositLeafInserted>(newMockEvent())

  depositLeafInsertedEvent.parameters = new Array()

  depositLeafInsertedEvent.parameters.push(
    new ethereum.EventParam(
      "depositIndex",
      ethereum.Value.fromUnsignedBigInt(depositIndex)
    )
  )
  depositLeafInsertedEvent.parameters.push(
    new ethereum.EventParam(
      "depositHash",
      ethereum.Value.fromFixedBytes(depositHash)
    )
  )

  return depositLeafInsertedEvent
}

export function createDepositedEvent(
  depositId: BigInt,
  sender: Address,
  recipientSaltHash: Bytes,
  tokenIndex: BigInt,
  amount: BigInt,
  depositedAt: BigInt
): Deposited {
  let depositedEvent = changetype<Deposited>(newMockEvent())

  depositedEvent.parameters = new Array()

  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "depositId",
      ethereum.Value.fromUnsignedBigInt(depositId)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientSaltHash",
      ethereum.Value.fromFixedBytes(recipientSaltHash)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIndex",
      ethereum.Value.fromUnsignedBigInt(tokenIndex)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "depositedAt",
      ethereum.Value.fromUnsignedBigInt(depositedAt)
    )
  )

  return depositedEvent
}

export function createDepositsAnalyzedAndProcessedEvent(
  upToDepositId: BigInt,
  rejectedIndices: Array<BigInt>,
  depositHashes: Array<Bytes>
): DepositsAnalyzedAndProcessed {
  let depositsAnalyzedAndProcessedEvent =
    changetype<DepositsAnalyzedAndProcessed>(newMockEvent())

  depositsAnalyzedAndProcessedEvent.parameters = new Array()

  depositsAnalyzedAndProcessedEvent.parameters.push(
    new ethereum.EventParam(
      "upToDepositId",
      ethereum.Value.fromUnsignedBigInt(upToDepositId)
    )
  )
  depositsAnalyzedAndProcessedEvent.parameters.push(
    new ethereum.EventParam(
      "rejectedIndices",
      ethereum.Value.fromUnsignedBigIntArray(rejectedIndices)
    )
  )
  depositsAnalyzedAndProcessedEvent.parameters.push(
    new ethereum.EventParam(
      "depositHashes",
      ethereum.Value.fromFixedBytesArray(depositHashes)
    )
  )

  return depositsAnalyzedAndProcessedEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

export function createWithdrawnEvent(
  recipient: Address,
  nullifier: Bytes,
  tokenIndex: BigInt,
  amount: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "nullifier",
      ethereum.Value.fromFixedBytes(nullifier)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIndex",
      ethereum.Value.fromUnsignedBigInt(tokenIndex)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawnEvent
}
