// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load", function() {
    
    var takeOff = document.getElementById('takeoff');
    var land = document.getElementById('landing');
    var missionAbort = document.getElementById('missionAbort');
    var flightStatus = document.getElementById('flightStatus');
    var up = document.getElementById('up');
    var down = document.getElementById('down');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var shuttleBackground = document.getElementById('shuttleBackground');
    var rocket = document.getElementById('rocket')
    var flightDisplay = document.getElementById('flight');
    var spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    takeOff.addEventListener('click', function() {
        const response = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (response) {
            flightStatus.textContent = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.textContent = '10000';
        }
    });

    land.addEventListener('click', function() {
        window.alert('The shuttle is landing. Landing gear engaged.')
        flightStatus.textContent = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.textContent = '0';
    });

    missionAbort.addEventListener('click', function() {
        const response = window.confirm('Confirm that you want to abort the mission.')
        if (response) {
            flightStatus.textContent = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.textContent = '0';
        }
    });

    rocket.style.position = 'relative';
    rocket.style.top = '250px';
    rocket.style.left = '0px';

    up.addEventListener('click', function(){
        let movement = parseInt(rocket.style.top) - 10 + 'px';
        let height = parseInt(spaceShuttleHeight.textContent) + 10000;
        rocket.style.top = movement;
        spaceShuttleHeight.textContent = height;
    })

    down.addEventListener('click', function(){
        let movement = parseInt(rocket.style.top) + 10 + 'px';
        let height = parseInt(spaceShuttleHeight.textContent) - 10000;
        rocket.style.top = movement;
        spaceShuttleHeight.textContent = height;
    })

    left.addEventListener('click', function(){
        let movement = parseInt(rocket.style.left) - 10 + 'px';
        rocket.style.left = movement;
    })

    right.addEventListener('click', function(){
        let movement = parseInt(rocket.style.left) + 10 + 'px';
        rocket.style.left = movement;
    })

    console.log("page is fully loaded");
  });