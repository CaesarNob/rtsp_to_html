// This file contains the JavaScript code for the main page, handling interactions such as linking to the room-view page and any dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    const roomLinks = document.querySelectorAll('.room-link');

    roomLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const roomId = this.getAttribute('data-room-id');
            localStorage.setItem('selectedRoomId', roomId);
        });
    });
});