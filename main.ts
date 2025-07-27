enum RadioMessage {
    右 = 7189,
    左 = 33982,
    ストップ = 41668,
    前進 = 48505,
    message1 = 49434,
    後進 = 64087
}
function スピーカーオン () {
    pins.setAudioPin(DigitalPin.P0)
}
function 右速度 (数値: number) {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 数値)
}
function 左速度 (数値: number) {
    pins.digitalWritePin(DigitalPin.P15, 数値)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 速後速度 (数値: number) {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 数値)
}
function ストップ () {
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
function 前進速度 (数値: number) {
    pins.analogWritePin(AnalogPin.P13, 数値)
    pins.analogWritePin(AnalogPin.P14, 0)
}
function スピーカーオフ () {
    pins.setAudioPinEnabled(false)
}
