/* 要素の取得
スタートを押したらランダムな数字がテキストボックスに高速で出力
ストップをお酢と留まる
その時の数字が揃っていた時とそうでないときに文字を返る
回数制限を設ける? スタートを押したら1ずつ減るようにする
0になったらGameOverと表示させる */

const start = document.getElementById('start-left')
const startcenter = document.getElementById('start-center')
const startright = document.getElementById('start-right')
const stops = document.getElementById('stop-left')
const left = document.getElementById('left')
const center = document.getElementById('center')
const right = document.getElementById('right')
const count = document.querySelector('.limit')
const reset = document.getElementById('reset'
)
var setnum;
var setcen;
var setrig;
var l;
var c;
var r;
var st = true;
var str = true;
var stc = true;



const leftevent = () => {
    var a = Math.floor(Math.random() * 9) + 1;
    left.value = a;
}





const centerevent = () => {
    var b = Math.floor(Math.random() * 9) + 1;
    center.value = b;
}

const rightevent = () => {
    var c = Math.floor(Math.random() * 9) + 1;
    right.value = c;
}


const set = () => {
    setnum = setInterval(leftevent, 10)
}

const setcenter = () => {
    setcen = setInterval(centerevent, 10)
}

const setright = () => {
    setrig = setInterval(rightevent, 10)
}

start.addEventListener('click', () => {
    stops.disabled = false
    stopbt = true;
    l = true;
    if (st) {
        set();
        st = false;
    } else {
        alert("startを二回以上押さないでね")
    }
}
)

startright.addEventListener('click', () => {
    stops.disabled = false
    stopbt = true
    r = true;
    if (str) {
        setright();
        str = false;
    } else {
        alert("startを二回以上押さないでね")
    }
})

startcenter.addEventListener('click', () => {
    stops.disabled = false
    stopbt = true
    c = true;
    if (stc) {
        setcenter();
        stc = false;
    } else {
        alert("startを二回以上押さないでね")
    }
})

//ストップを押したときに数が一ずつ減るようにする
var i = 10;
var stopbt = true;



stops.addEventListener('click', () => {
    clearInterval(setnum)
    clearInterval(setcen)
    clearInterval(setrig)
    if (stopbt && l == r == c == true) {
        i--
        count.textContent = "あと残り" + i + "回";
        stopbt = false
        st = true;
        str = true;
        stc = true;
        l = 0;
        r = 1;
        c = 2;
    } else {
        alert("stopを二回以上押さないでね")

    }

    if (i < 0) {
        count.textContent = "Game over"
    }
    if (left.value == center.value && center.value == right.value) {
        alert("congratulations!!")
    }
    return i

})

reset.addEventListener('click', () => {
    left.value = ""
    center.value = ""
    right.value = ""
    stops.disabled = true;
    count.textContent = "あと残り" + 10 + "回"
})


//setTimeout(leftevent, 10)