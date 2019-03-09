var events = [
    {
        event: "Driving through some local streets, you hit a pothole (of course) and pop your tire. What do you do?",
        checkTire();
    },
    {
        event: "You drank too much water and need a bathroom break - so you pull over at the nearest rest stop.",
        updateInventory();
    },
    {
        event: "As you drive down the highway, you run into a ton of shore traffic! What do you do now?",
        traffic();
    },
    {
        event: "In an attempt to make up time, you speed down the highway. Rut roh! The cops caught you and pulled you over. Do you:"
    },
    {
        event: "In the distance you see a hitchhiker. You're running low on cash, and if you take them they'll give you some gas money - BUT it could significantly delay your trip. What do you do?"
    },
    {
        event: "Driving through the streets of the city, you get swarmed by a horde of gang members who stop your car and demand you give them $100. Do you:"
    },
    {
        event: "You get within Cape May early, and decide to stop at Ocean City for some taffy. Yum! Do you:"
    }
]

var randomNumber;

function checkTire() {
    if (tire = 1) {
        choices = ["Replace your own tire","Call AAA","Cry"];
            if (this.choices[0]) {
                "You replace your own tire and lose 5 minutes."
                tire--;
                timer -= 5;
            }
            else if (this.choices[2]) {
                "You decide to cry and waste more time. Ten minutes later you finally calm down."
                timer -= 10;
                checkTire();
            }
            else {
                "You have to call AAA and lose 30 minutes."
                timer -= 30;
            }
        }
    else {
        choices = ["Call AAA","Cry"]
            if (this.choices[2]) {
                "You decide to cry and waste more time. Ten minutes later you finally calm down."
                timer -= 10;
                checkTire();
            }
            else {
                "You have to call AAA and lose 30 minutes."
                timer -= 30;
            }
        }
}


// function updateInventory() {

// }

function traffic() {
    randomNumber = Math.random()
    choices = ["Stay the course","Take a detour"]
        if (this.choices[0]) {
            if (randomNumber <= 0.5) {
                "Traffic cleared up! No time lost!"
            }
            else {
                "Traffic did not clear. Lost 30 minutes."
                timer -= 30; 
            }
        }
        else {
            if (randomNumber <= 0.5) {
                "Successful detour! No time lost!"
            }
            else {
                "Detour took you way out of the way. Lost 15 minutes."
                timer -= 15; 
            }
        }
}
