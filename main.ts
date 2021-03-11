
basic.showString("Shake to count")
basic.showString("B to clear")

let shake = 0
input.onGesture(Gesture.Shake, function () {
    shake += 1
})
basic.forever(function () {
    basic.showNumber(shake)
})
input.onButtonPressed(Button.B, function () {
    shake = 0
})
input.onButtonPressed(Button.A, function(){
    control.reset()
})