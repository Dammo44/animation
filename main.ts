let _1 = 0
basic.forever(function on_forever() {
    
    for (let index = 0; index < 5; index++) {
        led.unplot(0, _1 - 2)
        led.plot(0, _1)
        _1 += 1
        basic.pause(100)
    }
    led.unplot(0, 3)
    _1 = 1
    for (let index2 = 0; index2 < 5; index2++) {
        led.unplot(_1 - 2, 4)
        led.plot(_1, 4)
        _1 += 1
        basic.pause(100)
    }
    led.unplot(3, 4)
    _1 = 3
    for (let index3 = 0; index3 < 5; index3++) {
        led.unplot(4, _1 + 2)
        led.plot(4, _1)
        _1 += -1
        basic.pause(100)
    }
    led.unplot(4, 1)
    _1 = 3
    for (let index4 = 0; index4 < 3; index4++) {
        led.unplot(_1 + 2, 0)
        led.plot(_1, 0)
        _1 += -1
        basic.pause(100)
    }
    led.unplot(2, 0)
    _1 = 0
    for (let index5 = 0; index5 < 4; index5++) {
        led.unplot(1, _1 - 2)
        led.plot(1, _1)
        _1 += 1
        basic.pause(100)
    }
    led.unplot(1, 2)
    _1 = 1
    for (let index6 = 0; index6 < 3; index6++) {
        led.unplot(_1 - 2, 3)
        led.plot(_1, 3)
        _1 += 1
        basic.pause(100)
    }
    led.unplot(2, 3)
    _1 = 2
    for (let index7 = 0; index7 < 2; index7++) {
        led.unplot(3, _1 + 2)
        led.plot(3, _1)
        _1 += -1
        basic.pause(100)
    }
    led.unplot(3, 2)
    led.plot(2, 1)
    basic.pause(100)
    led.unplot(3, 1)
    led.plot(2, 2)
    basic.pause(100)
    led.unplot(2, 1)
    basic.pause(100)
    led.unplot(2, 2)
})
