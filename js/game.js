function update() {
    data.money += data.money_per_tick
}
function reload_displays() {
    elements.money_display.child.child.textContent = data.money.toLocaleString()
    elements.money_display.child.second_child.second_child = data.money_per_tick.toLocaleString()
}

const game_interval = setInterval(update, 50)
const reload_interval = setInterval(reload_displays, 50)

function transition_home() {
    elements.content.style.opacity = 0;
    setTimeout(function(){
        elements.content = document.getElementById('home');
        elements.content.style.display = "block";
        elements.content = document.getElementById('body_content');
        setTimeout(function(){elements.content.style.opacity = 1;}, 200)
    }, 200)
}
