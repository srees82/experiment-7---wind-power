let Highest = 0
let Value = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Highest)
})
input.onButtonPressed(Button.B, function () {
    Value = 0
    Highest = 0
})
basic.forever(function () {
    Value = 0
    Highest = 0
    Value = pins.analogReadPin(AnalogPin.P0)
    if (Value > Highest) {
        Highest = Value
    }
})
