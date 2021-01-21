class Wallet {
    constructor() {
        this.total = 0;
        this.spent = 0;
        this.current = 0;
    }
    addTotal(number){
        this.total += number;
        this.current += number;

    }
    getCurrentMoney(){
        return this.current;
    }
    spendMoney(amount){
        // this.current -= amount;
        this.spent += amount;
    }
}
