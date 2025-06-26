enum RadioMessage {
    message1 = 49434
}
function LED青 () {
    mCar.rgbLight(mCar.McarRGBLight.RGBA, 0x0000ff)
}
function リモコン右送信 () {
    radio.sendValue("name", 0)
}
function LED黄 () {
    mCar.rgbLight(mCar.McarRGBLight.RGBA, 0xffff00)
}
function 後進2 () {
    mCar.setWheelDirectionSpeed(mCar.McarWheels.AllWheel, mCar.WheelDir.BW, 100)
}
function LED赤 () {
    mCar.rgbLight(mCar.McarRGBLight.RGBA, 0xff0000)
}
function LED緑 () {
    mCar.rgbLight(mCar.McarRGBLight.RGBA, 0x00ff00)
}
function リモコン前送信 () {
    radio.sendMessage(RadioMessage.message1)
}
function リモコン後送信 () {
    radio.sendNumber(0)
}
function 右回り2 () {
    mCar.setWheelDirectionSpeed(mCar.McarWheels.RightWheel, mCar.WheelDir.FW, 100)
}
function 電池残量 () {
    basic.showNumber(mCar.batteryLevel(mCar.BatteryType.AA))
}
function 左回り2 () {
    mCar.setWheelDirectionSpeed(mCar.McarWheels.LeftWheel, mCar.WheelDir.FW, 100)
}
function 停止2 () {
    mCar.carStop()
}
function 前進2 () {
    mCar.setWheelDirectionSpeed(mCar.McarWheels.AllWheel, mCar.WheelDir.FW, 100)
}
function リモコン左送信2 () {
    radio.sendString("")
}
function LEDオフ () {
    mCar.turnOffAllHeadlights()
}
