var score=0;
function getScore(){
    
    if (document.getElementById('right1').checked){
        score+=20;
       

    }
    else {
        score+=0;
    }
    if (document.getElementById('right2').checked){
        score+=20;
       

    }
    else {
        score+=0;
    }
    if (document.getElementById('right3').checked){
        score+=20;
       

    }
    else {
        score+=0;
    }
    if (document.getElementById('right4').checked){
        score+=20;
       

    }
    else {
        score+=0;
    }
    if (document.getElementById('right5').checked){
        score+=20;
       

    }
    else {
        score+=0;
    }
    document.write('You scored '+score'%')

    

}
function grade(){
   if (score<=80) 
}
