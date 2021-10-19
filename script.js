const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  
  
  console.log(scores.map(({name}) => name))
  console.log(scores.filter(({marks}) => marks >= 40 ? true : false))
  console.log(scores.filter(({marks}) => marks <= 40 ? true : false).map(({name}) => name))
  console.log(scores.reduce((acc, {marks}) => acc+marks,0)/scores.length)
  console.log(scores.reduce((result, student) => student.marks > result.marks ? student : result).name)

a = [3,2,1,3,3,3,5]
b = [1,2,6,4,3,3,3,3]
function intersection(a,b) {
    console.log([... new Set(a)].filter(e => {
    if(b.indexOf(e) != -1) {
        return true
    }
    
    })) 
}

unique = (a) => console.log([...new Set(a)])

function without(a,...b) {
    console.log([...new Set(a)].filter(e => {
        if(b.indexOf(e) == -1) {
            return true
        }
    }))
}

function groupBy(arr, func) {

    if((typeof func).toString() == 'function') {
         a = arr.reduce((result, cur )=> { 
         val = func(cur)
         if(result[val] !== undefined){
             result[val] = [...(result[val]),cur];
             return result;
         }
         else{
          
            obj = {}
            obj[val] = [cur];
             result = {...result, ...obj}

             return result
         }
         },{})
         console.log(a)
    }
    else{
        a = arr.reduce((result, cur) =>{
            result[cur[func]] = result[cur[func]] || [];
            result[cur[func]].push(cur)
            return result;
        }, {});   
    console.log(a)
}
    
}

intersection(a,b)
unique(a)
without(a,1,3,57)
groupBy([6.1, 4.2, 6.3], Math.floor)
groupBy(['one', 'two', 'three'], 'length');

class Bank{
    constructor(balance,name) {
        this.bal = balance;
        this.name = name;
    }
    
    exception(message) {
        console.log(message)
    }
    getBalance() {
        console.log("your balance is " + this.bal)
    }
    withdraw(amnt){
        this.bal > amnt ? this.bal -= amnt :  this.exception("low balance")
        this.getBalance()
    }
    deposit(amnt){
        this.bal += amnt;
        this.getBalance()
    }
}

b = new Bank(1000,"gokul")
b.getBalance()
b.withdraw(1100)
b.withdraw(100)
b.deposit(100)

  