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
//end-here
//console.log([...new Set(a)])
//intersection(a.filter((i,index) => a.indexOf(i) == index),b)
intersection(a,b)
unique(a)
without(a,1,3,57)
  