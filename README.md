# i2cLCD1602

makecode I2C LCD1602 package for micro:bit  

Author: shaoziyang  
Date:   2018.Mar  
  
![](https://raw.githubusercontent.com/microbit-makecode-packages/i2cLCD1602/master/lcd.jpg)

## usage

open your microbit makecode project, in Add Package, paste  

"https://github.com/microbit-makecode-packages/i2cLCD1602"  

to search box then search.

## API

- LcdInit(Addr: number)  
Initial LCD  
Addr: I2C Address.  

- ShowNumber(n: number, x: number, y: number)  
show a number in LCD at given position.  
n: number will be show  
x: is LCD column position, [0 - 15]  
y: is LCD row position, [0 - 1]  

- ShowString(s: string, x: number, y: number)  
show a string in LCD at given position.  
s: string will be show  
x: is LCD column position, [0 - 15]  
y: is LCD row position, [0 - 1]  

- LcdOn()  
turn on LCD  

- LcdOff()  
turn off LCD  

- LcdClear()  
clear LCD content  

- BacklightOn()  
turn on LCD backlight  

- BacklightOff()  
turn off LCD backlight  

## Demo

![](https://raw.githubusercontent.com/microbit-makecode-packages/i2cLCD1602/master/demo.jpg)

## License

MIT

Copyright (c) 2018 microbit-makecode-packages

## Supported targets

* for PXT/microbit


[From microbit/micropython Chinese community](http://www.micropython.org.cn)
