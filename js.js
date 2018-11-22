function test1() {
    const divs = document.querySelectorAll('.test');
    for (let i = 0; i < divs.length; i++) {
        divs[i].innerHTML = i;
    }
}

function test2() {
    for (let i = 0; i < document.querySelectorAll('.test').length; i++) {
        document.querySelectorAll('.test')[i].innerHTML = i;
    }
}


window.addEventListener('load', e => {
    let timer1 = 'timer1';
    console.time(timer1);

    // Раскомментировать нужный вариант теста
    // test2();
    test1();


    console.timeEnd(timer1);
});