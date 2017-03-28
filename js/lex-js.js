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
        $('#salary').css('font-weight', 400);
        $('.sal-options').css('display', 'flex');
        $('.dept-options').css('display', 'none');
    });
    
     $('#salary').click(function() {
        $('#salary').css('font-weight', 400);
        $('#dept').css('font-weight', 200);
        $('#division').css('font-weight', 200);
        $('#title').css('font-weight', 200);
        $('.sal-options').css('display', 'flex');
        $('.dept-options').css('display', 'none');
    });
    
    $('#dept').click(function() {
        $('#salary').css('font-weight', 200);
        $('#dept').css('font-weight', 400);
        $('.sal-options').css('display', 'none');
        $('.dept-options').css('display', 'flex');
    });
        
    $('#close').click(function() {
        $('#filter-modal').css('display', 'none');
    });
    
    /*
    filter modal functions
    */
    
    $('.A').click(function() {
        $('#A').css('display', 'flex');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.B').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'flex');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.C').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'flex');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.D').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'flex');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
   $('.E').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'flex');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.F').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'flex');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.G').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'flex');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.H').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'flex');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.I').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'flex');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.J').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'flex');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.K').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'flex');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.L').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'flex');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.M').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'flex');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.N').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'flex');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.P').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'flex');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.R').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'flex');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.S').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'flex');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.T').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'flex');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.U').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'flex');
        $('#V').css('display', 'none');
        $('#W').css('display', 'none');
    });
    
    $('.V').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'flex');
        $('#W').css('display', 'none');
    });
    
    $('.W').click(function() {
        $('#A').css('display', 'none');
        $('#B').css('display', 'none');
        $('#C').css('display', 'none');
        $('#D').css('display', 'none');
        $('#E').css('display', 'none');
        $('#F').css('display', 'none');
        $('#G').css('display', 'none');
        $('#H').css('display', 'none');
        $('#I').css('display', 'none');
        $('#J').css('display', 'none');
        $('#K').css('display', 'none');
        $('#L').css('display', 'none');
        $('#M').css('display', 'none');
        $('#N').css('display', 'none');
        $('#P').css('display', 'none');
        $('#R').css('display', 'none');
        $('#S').css('display', 'none');
        $('#T').css('display', 'none');
        $('#U').css('display', 'none');
        $('#V').css('display', 'none');
        $('#W').css('display', 'flex');
    });
});