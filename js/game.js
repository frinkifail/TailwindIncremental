function update() {
    data.money += data.money_per_tick
}
function reload_displays() {
    document.getElementById('money display child child').textContent = data.money.toLocaleString()
    document.getElementById('money display second child child').textContent = data.money_per_tick.toLocaleString()
    document.getElementById('shop-item__efficiency-cost').textContent = shop.efficiency.cost.toLocaleString()
    document.getElementById('shop-item__efficiency-amount').textContent = shop.efficiency.amount.toLocaleString()
}

const game_interval = setInterval(update, 50)
const reload_interval = setInterval(reload_displays, 50)

function transition_tab(tab) {
    elements.content.style.opacity = 0;
    setTimeout(function(){
        if (tab === "home") {
            elements.content.innerHTML = document.getElementById('home').innerHTML;
        }
        else if (tab === "shop") {
            elements.content.innerHTML = document.getElementById('shop').innerHTML;
        }
        elements.content.style.display = "block";
        elements.content = document.getElementById('body_content');
        setTimeout(function(){elements.content.style.opacity = 1;}, 0)
    }, 200)
}

function buy_shop_item(item) {
    if (item === "efficiency") {
        if (data.money >= shop.efficiency.cost) {
            data.money -= shop.efficiency.cost;
            shop.efficiency.amount += 1;
            shop.efficiency.cost *= shop.efficiency.growth
            data.money_per_tick += 1;
        }
    }
}
