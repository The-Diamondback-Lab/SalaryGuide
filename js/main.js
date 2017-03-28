$(document).ready(function() {
    
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
    
    
    
    
});