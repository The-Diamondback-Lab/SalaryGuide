$(document).ready(function() {
    
    /*
    jquery functions for landing page
    */
    $('#about').click(function() {
        $('#about').css('font-weight', 400);
        $('#abt-modal').css('display', 'block');
    });
   
    $('#abt-close').click(function() {
        $('#about').css('font-weight', 200);
        $('#abt-modal').css('display', 'none');
    }); 
    
    $('#previous').click(function() {
        $('#previous').css('font-weight', 400);
        $('#prev-modal').css('display', 'block');
    });
   
    $('#prev-close').click(function() {
        $('#previous').css('font-weight', 200);
        $('#prev-modal').css('display', 'none');
    });
    
    /*
    jquery functions for salary guide landing page
    */
    $('#filter').click(function() {
        $('#filter-modal').css('display', 'block');
    });
    
    $('#filter-close').click(function() {
        $('filter-modal').css('display', 'none');
    });
    
    
});