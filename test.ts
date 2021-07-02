let item = 0
I2C_LCD2004.LcdInit(0)
I2C_LCD2004.ShowString("Hello", 0, 0)
basic.forever(() => {
    item += 1
    I2C_LCD2004.ShowNumber(item, 0, 1)
    basic.pause(1000)
})
