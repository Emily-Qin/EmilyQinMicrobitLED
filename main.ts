//If Button A is pressed
input.onButtonPressed(Button.A, function () {
    lightUp()
})

//Light up the lights
function lightUp () {
    //makes sure once everything is lit up moves on to next step
    if (xcoList.length < 25) {
        coExist = 1
        while (coExist == 1) {
            //pick random number
            xco = randint(0, 4)
            yco = randint(0, 4)
            //check if coordinates already exists
            coExist = 0
            for (let i = 0; i <= xcoList.length - 1; i++) {
                if (xcoList[i] == xco && ycoList[i] == yco) {
                    coExist = 1
                }
            }
        }
        //plots it and pushes x and y values to list together
        led.plot(xco, yco)
        xcoList.push(xco)
        ycoList.push(yco)
    }
    //turs off, pauses, turns on lights
    if (xcoList.length == 25) {
        // to show the last led light
        basic.pause(100)
        led.enable(false) //shortcut because all lights are turned on
        basic.pause(100) //wait 100ms
        led.enable(true)
    }
}

//if Button A and B Pressed
input.onButtonPressed(Button.AB, function () {
	 for (let i = 0; i <=  4; i++) {
        for (let j = 0; j <=  4; j++) {
            led.unplot(i, j)
        }
     }
    basic.showString("RESET")
    //resetting list
    xcoList=[]
    ycoList=[]

})

//If Button B pressed
input.onButtonPressed(Button.B, function () {
    lightoff()
})

//Turn lights off according to order
function lightoff () {
    xco = xcoList[0]
    yco = ycoList[0]
    led.unplot(xco, yco)
    xcoList.shift()
    ycoList.shift()
    //if no lights on
    if (xcoList.length == 0) {
        //turns lights on
        for (let i = 0; i <=  4; i++) {
        for (let j = 0; j <=  4; j++) {
            led.plot(i, j)   
        }
        }   
            basic.pause(100) //wait 100ms
        //turns lights off
        for (let i = 0; i <=  4; i++) {
        for (let j = 0; j <=  4; j++) {
            led.unplot(i, j)   
        }
        }   
    }
}

//variables
let coExist = 0
let ycoList: number[] = []
let xcoList: number[] = []
let yco = 0
let xco = 0
xco = randint(0, 4)
yco = randint(0, 4)
xcoList = []
ycoList = []