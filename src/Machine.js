class Machine {
  constructor() {
    this.snacks = []
    this.currentAmount = 0
  }

  seeSelections() {
    return this.snacks
  }

  stock(inventory) {
    if (inventory == undefined) {
      throw Error("please do not troll. you cannot stock nothing.")
    }
    this.snacks = inventory
  }

  insertMoney(moneyAmount) {
    if (moneyAmount==10||moneyAmount==20||moneyAmount==50||moneyAmount==100||moneyAmount==500){
      this.currentAmount += moneyAmount
    } else {
      return 'Fake money. Transaction declined.'
    }
    return `You have deposited ¥${this.currentAmount}`
  }

  checkItemAvailability(item) {
    var arr = this.snacks
    arr.forEach((element) => {
      if (element == item) {
        return `${item} is available.`
      } else {
        return 'The item you selected is unavailable.'
      }
    })
  }
}

module.exports = Machine
const vendingMachine = new Machine
vendingMachine.stock('snickers')
console.log(vendingMachine.checkItemAvailability('snickers'))