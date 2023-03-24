const data = {
    money: 0,
    money_per_tick: 0.1
}
const elements = {
    money_display: {
        parent: document.getElementById('money display parent'),
        child: {
            parent: document.getElementById('money display child'),
            child: document.getElementById('money display child child'),
            second_child: {
                parent: document.getElementById('money display second child'),
                child: document.getElementById('money display second child child'),
                second_child: document.getElementById('money display second child second child')
            }
        },
    },
    content: document.getElementById('body_content')
}