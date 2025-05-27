import {
  DepositCanceled as DepositCanceledEvent,
  DepositLeafInserted as DepositLeafInsertedEvent,
  Deposited as DepositedEvent,
  DepositsAnalyzedAndProcessed as DepositsAnalyzedAndProcessedEvent,
  Initialized as InitializedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Upgraded as UpgradedEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/Int1L/Int1L"
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
} from "../generated/schema"

export function handleDepositCanceled(event: DepositCanceledEvent): void {
  let entity = new DepositCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositId = event.params.depositId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositLeafInserted(
  event: DepositLeafInsertedEvent
): void {
  let entity = new DepositLeafInserted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositIndex = event.params.depositIndex
  entity.depositHash = event.params.depositHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposited(event: DepositedEvent): void {
  let entity = new Deposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositId = event.params.depositId
  entity.sender = event.params.sender
  entity.recipientSaltHash = event.params.recipientSaltHash
  entity.tokenIndex = event.params.tokenIndex
  entity.amount = event.params.amount
  entity.depositedAt = event.params.depositedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositsAnalyzedAndProcessed(
  event: DepositsAnalyzedAndProcessedEvent
): void {
  let entity = new DepositsAnalyzedAndProcessed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.upToDepositId = event.params.upToDepositId
  entity.rejectedIndices = event.params.rejectedIndices
  entity.depositHashes = event.params.depositHashes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.nullifier = event.params.nullifier
  entity.tokenIndex = event.params.tokenIndex
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
