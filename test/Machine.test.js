const Machine = require('../src/Machine')

describe('The vending machine', () => {
  it('is initialized with no items', () => {
    // SEAT
    // setup
    const vendingMachine = new Machine();

    // exercise & assert
    expect(vendingMachine.seeSelections()).toEqual([])

    // teardown, not needed
  })

  it('can stock one snack', () => {
    // setup
    const vendingMachine = new Machine();
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }

    // exercise
    vendingMachine.stock([snack])

    // assert
    expect(vendingMachine.seeSelections()).toEqual([snack])
  })

  // it('stocks nothing if there is no inventory passed', () => {
  //   // setup
  //   const vendingMachine = new Machine()

  //   // exercise
  //   vendingMachine.stock()

  //   // assertion
  //   expect(vendingMachine.seeSelections()).toEqual([])
  // })

  it('displays an error if no inventory comes with stocking', () => {
    // setup
    const vendingMachine = new Machine()
    const displayMessage = "please do not troll. you cannot stock nothing."

    // exercise & assert
    expect(() => vendingMachine.stock()).toThrow(displayMessage)
  })

  it('is able to receive and display inserted money', () => {
    // setup
    const vendingMachine = new Machine()
    const displayMessage = 'You have deposited ¥100'

    // assertion
    expect(vendingMachine.insertMoney(100)).toEqual(displayMessage)
  })

  it ('only accepts bills in the denominations of 10, 20, 50, 100, and 500', () => {

    const vendingMachine = new Machine()
    const displayMessage = 'Fake money. Transaction declined.'

    expect(vendingMachine.insertMoney(55)).toEqual(displayMessage)
  })
})