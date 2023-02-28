$(document).ready(function () {
    $('#add-color').on('click', function () {
        const color = $('#color').val();
        const $swatch = $('<div />').addClass('swatch').css('background-color', color);
        $swatch.appendTo('.palette');
    });

    // Event delegation: listen for events on yet-to-be-created DOM elements
    $('.palette').on('click', '.swatch', function () {
        $('.selected').removeClass('selected'); // Deselect the previously selected swatch.
        $(this).addClass('selected');
    });
    
    // Event delegation: listen for events on the parent for efficiency
    $('.canvas').on('mouseover', '.pixel', function (event) {
        if (event.shiftKey === true) return; // holding down shift cancels the drawing
        const color = $('.selected').css('background-color');
        $(this).css('background-color', color);
    });
});