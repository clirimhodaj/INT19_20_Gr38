
 var aplikacioni_cmimet = new Array();
 aplikacioni_cmimet["Aplikacioni1"]=100;
 aplikacioni_cmimet["Aplikacioni2"]=130;
 aplikacioni_cmimet["Aplikacioni3"]=80;
 aplikacioni_cmimet["Aplikacioni4"]=180;
 


 

 var paketat_cmimet= new Array();
 paketat_cmimet["None"]=0;
 paketat_cmimet["Premium"]=5;
 paketat_cmimet["Super Premium"]=7;
 paketat_cmimet["VIP"]=10;
 
 
    
function merrCmimineAplikacionit()
{  
    var cmimiAplikacioni=0;
    
    var theForm = document.forms["aplikacionizgjedhur"];
    
    var aplikacioniSelektuar = theForm.elements["aplikacioniselektuar"];
    
    for(var i = 0; i < aplikacioniSelektuar.length; i++)
    {
        
        if(aplikacioniSelektuar[i].checked)
        {
           
            cmimiAplikacioni = aplikacioni_cmimet[aplikacioniSelektuar[i].value];
            
            break;
        }
    }
    
    return cmimiAplikacioni;
}


function merrCmiminePaketes()
{
    var cmimiPaketa=0;
    
    var theForm = document.forms["aplikacionizgjedhur"];
    
     var paketazgjedhur = aplikacionizgjedhur.elements["paketa"];
     
    
    cmimiPaketa = paketat_cmimet[paketazgjedhur.value];

    return cmimiPaketa;
}

function mirmbajtjaCmimi()
{
    var mirmbajtjaaCmimi=0;
   
    var theForm = document.forms["cakeform"];
    
    var perfshiMirbajtjen = aplikacionizgjedhur.elements["perfshimirmbajtjen"];

    if(perfshiMirbajtjen.checked==true)
    {
        mirmbajtjaaCmimi=20;
    }
   
    return mirmbajtjaaCmimi;
}
