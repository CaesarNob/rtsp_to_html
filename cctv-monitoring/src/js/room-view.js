// This file contains the JavaScript code for the room-view page, managing the display of camera angles and any related functionality.

document.addEventListener('DOMContentLoaded', function() {
    const roomData = getRoomData(); // Function to retrieve room data
    const roomId = getRoomIdFromURL(); // Function to get room ID from URL
    const room = roomData.find(r => r.id === roomId); // Find the room by ID

    if (room) {
        displayRoomInfo(room); // Function to display room information
        displayCameraAngles(room.cameraAngles); // Function to display camera angles
    } else {
        displayErrorMessage(); // Function to display an error message if room not found
    }
});

function getRoomData() {
    // This function should fetch or import the room data
    return [
        // Sample data structure
        { id: '1', name: 'Room 101', cameraAngles: ['Angle 1', 'Angle 2'] },
        { id: '2', name: 'Room 102', cameraAngles: ['Angle 1', 'Angle 2', 'Angle 3'] }
    ];
}

function getRoomIdFromURL() {
    // This function extracts the room ID from the URL
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function displayRoomInfo(room) {
    // Function to display room information on the page
    const roomInfoElement = document.getElementById('room-info');
    roomInfoElement.innerHTML = `<h2>${room.name}</h2>`;
}

function displayCameraAngles(cameraAngles) {
    // Function to display camera angles on the page
    const anglesListElement = document.getElementById('camera-angles');
    anglesListElement.innerHTML = cameraAngles.map(angle => `<li>${angle}</li>`).join('');
}

function displayErrorMessage() {
    // Function to display an error message if the room is not found
    const roomInfoElement = document.getElementById('room-info');
    roomInfoElement.innerHTML = '<p>Room not found.</p>';
}