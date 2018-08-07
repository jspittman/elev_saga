{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator1 = elevators[1];

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
            elevator.goToFloor(1);
            elevator.goToFloor(2);
            elevator1.goToFloor(0);
            elevator1.goToFloor(1);
            elevator1.goToFloor(2);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
