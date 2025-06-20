import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { DepositCanceled } from "../generated/schema"
import { DepositCanceled as DepositCanceledEvent } from "../generated/Int1L/Int1L"
import { handleDepositCanceled } from "../src/int-1-l"
import { createDepositCanceledEvent } from "./int-1-l-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let depositId = BigInt.fromI32(234)
    let newDepositCanceledEvent = createDepositCanceledEvent(depositId)
    handleDepositCanceled(newDepositCanceledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DepositCanceled created and stored", () => {
    assert.entityCount("DepositCanceled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DepositCanceled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "depositId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
