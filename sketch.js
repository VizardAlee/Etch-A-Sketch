const container = document.querySelector('.container');


for (i = 0; i < 870 - 29; i++) {
    const div = document.createElement('div');
    div.classList.add('pad');

    container.appendChild(div);

    div.addEventListener('mouseup', ()=> {
        div.style.backgroundColor = "black";
    })
}

