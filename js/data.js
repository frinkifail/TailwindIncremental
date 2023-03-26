const data = {
    money: 0,
    money_per_tick: 1
}
const elements = {
    content: document.getElementById('body_content')
}

/* Shop Item Methods - All contributes to data.money_per_tick!
0 = add
1 = multiply
2 = minus update time
*/
const shop = {
    efficiency: {
        cost: 10,
        growth: 1.225,
        amount: 0,
        method: 0,
        per: 1
    },
    generator: {
        cost: 1000,
        growth: 1.445,
        amount: 0,
        method: 1,
        per: 2
    },
    time_wait: {
        cost: 5000,
        growth: 1.885,
        amount: 1,
        method: 2,
        per: 0.1
    }
}
