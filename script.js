var foodInput;
var numberInput;

$("button").click(function() {
    var food = $(".food").val();
    var number = $(".number").val();

    
     if ( food === "pizza" && number <6 ){   
       
       $("#yes").show();
                                   
    }
 
        
     else if ( food === "pizza" && number >5 ){ 
    
     $("#chicken").show();
   
    }
    
     else if ( food === "corndog" && number <6 ){
    
    $("#horse").show();
    
    }

    
     else if ( food === "corndog" && number >5 ){ 
    
    $("#frog").show();

    }
 
    
 
 });
 


    