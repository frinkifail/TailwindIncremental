function reload_shop_display_dynamic(item) {
    document.getElementById(`shop-item__${item}-cost`).textContent = shop[item].cost.toLocaleString()
    document.getElementById(`shop-item__${item}-amount`).textContent = shop[item].amount.toLocaleString()
}

function update() {
    data.money += data.money_per_tick
}
function reload_displays() {
    document.getElementById('money display child child').textContent = data.money.toLocaleString()
    document.getElementById('money display second child child').textContent = data.money_per_tick.toLocaleString()
    reload_shop_display_dynamic('efficiency')
    reload_shop_display_dynamic('generator')
}

const game_interval = setInterval(update, 1000)
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
        else if (tab === "debug") {
            elements.content.innerHTML = document.getElementById('debug').innerHTML;
            document.getElementById('add_money_1000').onclick = () => {data.money += 1000}
        } else {
            alert("! ERROR ! Sorry, tab not specified")
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
function buy_shop_item_dynamic(item) {
    try {
        if (data.money >= shop[item].cost) {
            data.money -= shop[item].cost
            shop[item].amount += 1;
            shop[item].cost *= shop[item].growth
            switch (shop[item].method) {
                case 0:
                    data.money_per_tick += shop[item].per
                    break;
                case 1:
                    data.money_per_tick *= shop[item].per
                    break;
                default:
                    alert("Warning in buy_shop_item_dynamic: Method not cased")
                    break;
            }
        }
    } catch {
        alert("Exception in buy_shop_item_dynamic: Unknown")
    }
}
