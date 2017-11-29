console.log('client.js is sources');

$(document).ready(function () {
    console.log('jQuery .ready has been loaded');
    $('#add-pet').on('click', addPet)
    });
