var locationTracker = 0; 
var totalDistance = 360;
var nextLocation = 40;

function Location(place, route, ableToPurchase, event, type) {
    this.place = place;
    this.route = route;
    this.ableToPurchase = ableToPurchase;
    this.event = event;
    this.type = type;
}

var locations = 
    {
    1: new Location ("Newark Airport", 1, "N", "Global", "Urban"),
    2: new Location ("Turnpike Exit", 1, "Y", "Global", "Highway"),
    3: new Location ("Long Beach Island", 1, "Y", "Specific", "Rural"),
    4: new Location ("Seaside Heights", 1, "N", "Global","Rural"),
    5: new Location ("Asbury Park", 1, "Y", "Specific","Rural"),
    6: new Location ("Neptune", 1, "Y", "Global","Rural"),
    7: new Location ("PNC Bank Arts Center", 1, "Y", "Specific", "Rural"),
    8: new Location ("Atlantic City", 1, "Y", "Specific", "Urban"),
    9: new Location ("Ocean City", 1, "N", "Global", "Rural")
    };

var locationsArray = Object.values(locations)