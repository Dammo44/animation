_1 = 0

def on_forever():
    global _1
    for index in range(5):
        led.unplot(0, _1 - 2)
        led.plot(0, _1)
        _1 += 1
        basic.pause(100)
    led.unplot(0, 3)
    _1 = 1
    for index2 in range(5):
        led.unplot(_1 - 2, 4)
        led.plot(_1, 4)
        _1 += 1
        basic.pause(100)
    led.unplot(3, 4)
    _1 = 3
    for index3 in range(5):
        led.unplot(4, _1 + 2)
        led.plot(4, _1)
        _1 += -1
        basic.pause(100)
    led.unplot(4, 1)
    _1 = 3
    for index4 in range(3):
        led.unplot(_1 + 2, 0)
        led.plot(_1, 0)
        _1 += -1
        basic.pause(100)
    led.unplot(2, 0)
    _1 = 0
    for index5 in range(4):
        led.unplot(1, _1 - 2)
        led.plot(1, _1)
        _1 += 1
        basic.pause(100)
    led.unplot(1, 2)
    _1 = 1
    for index6 in range(3):
        led.unplot(_1 - 2, 3)
        led.plot(_1, 3)
        _1 += 1
        basic.pause(100)
    led.unplot(2, 3)
    _1 = 2
    for index7 in range(2):
        led.unplot(3, _1 + 2)
        led.plot(3, _1)
        _1 += -1
        basic.pause(100)
    led.unplot(3, 2)
    led.plot(2, 1)
    basic.pause(100)
    led.unplot(3, 1)
    led.plot(2, 2)
    basic.pause(100)
    led.unplot(2, 1)
    basic.pause(100)
    led.unplot(2, 2)
basic.forever(on_forever)
