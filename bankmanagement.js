class BankAccount {
  #balance;

  constructor(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0) {
        console.log("Invalid amount");
        return;
    }

    this.#balance = this.#balance + amount;
}

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance");
      return;
    }

    this.#balance = this.#balance - amount;
  }

  getAccountType() {
    console.log("This is a Bank Account");
  }
}

class SavingBankAccount extends BankAccount {
  constructor(accountHolderName, balance, interestRate) {
    super(accountHolderName, balance);
    this.interestRate = interestRate;
  }

  getAccountType() {
    console.log("This is a Saving Bank Account");
  }
}

// Bank Account
let vidhiSBI = new BankAccount("Vidhi Maheshwari", 5000);

console.log(vidhiSBI.accountHolderName);
console.log(vidhiSBI.getBalance());

vidhiSBI.deposit(2000);

console.log(vidhiSBI.getBalance());

vidhiSBI.withdraw(1000);

console.log(vidhiSBI.getBalance());

vidhiSBI.getAccountType();

// Saving Bank Account
let aashiSBI = new SavingBankAccount("Aashi", 12000, 8);

console.log(aashiSBI.accountHolderName);
console.log(aashiSBI.getBalance());
console.log(aashiSBI.interestRate);

aashiSBI.deposit(1000);

console.log(aashiSBI.getBalance());

aashiSBI.getAccountType();

