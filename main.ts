input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    shake = 0
})
input.onGesture(Gesture.Shake, function () {
    shake += 1
})
let shake = 0
basic.showString("Shake to count")
basic.showString("B to clear")
basic.forever(function () {
    basic.showNumber(shake)
})
