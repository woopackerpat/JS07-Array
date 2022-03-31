


const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ]



// function sum(saleAmount) {

//     const summary = []

//     for(let i = 0; i < saleAmount.length; i++) {
//         summary[i] = {
//             "netPrice": saleAmount[i].price * ((saleAmount[i].discount)? (1-saleAmount[i].discount) : 1)
//         }
//     }

//     return summary
// }

//เฉลย

const summary = []
for (let el of sales) {
    summary[summary.length] = {
        netPrice: el.price* (1 - (el.discount ?? 0))
    }
}

let a = [1, 2, 5, 6]

a.find