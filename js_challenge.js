/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*jslint devel: true*/
/*global alert, confirm, console, prompt*/

function ageInDays(){
    var YOB = prompt('What year were you born?');
    var yearOfBirth = parseInt(YOB);
    if (yearOfBirth <= 2020){
        var ageInDayss = (2020 - yearOfBirth) * 365;
        var h2 = document.createElement('h2');
        var textAnswer = document.createTextNode('You are '+ageInDayss+' days old.');
        h2.setAttribute('id', 'ageInDays');
        h2.appendChild(textAnswer);
        document.getElementById('flex-box-result').appendChild(h2);
        }
    else{
        alert('Enter an year less than or equal to 2020');
    }
}
function reset(){
    document.getElementById('ageInDays').remove();
}

function rps(myChoice){
    
    var rock_div = document.getElementById("rock");
    var paper_div = document.getElementById("paper");
    var scissor_div = document.getElementById("scissor");
    
    var rock_image = document.getElementById("rock_image_id");
    var paper_image = document.getElementById("paper_image_id");
    var scissor_image = document.getElementById("scissor_image_id");
do{   
    var randomNumber = (Math.floor(Math.random() * (4 - 1) + 1));
    switch(randomNumber){
        case 1:
            var computerChoice = rock_image;
            break;
        case 2:
            var computerChoice = paper_image;
            break;
        case 3:
            var computerChoice = scissor_image;
            break;
    }}while(computerChoice == myChoice);
    
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();
    
    computerChoice.setAttribute("onclick", " ");
    var computer_div = document.createElement('div');
    computer_div.setAttribute('id', 'computer_div_id');
    computer_div.appendChild(computerChoice);
    document.getElementById("flex-box-container-2").appendChild(computer_div);
    
    var result = (myChoice == rock_image)?(computerChoice == paper_image?"You Loose":"You Win"):(myChoice == paper_image?(computerChoice == rock_image?"You Win":"You Loose"):(computerChoice == rock_image?"You Loose":"You Win")); 
    
    var result_div = document.createElement('div');
    result_div.setAttribute('id','result_div_id');
    
    if(result == "You Win"){
    
        var winning_result_h2 = document.createElement('h2');
        winning_result_h2.setAttribute("id", "winning_result_h2_id");
        var resultTextNode = document.createTextNode(result);
        winning_result_h2.appendChild(resultTextNode);
        result_div.appendChild(winning_result_h2);
        document.getElementById("flex-box-container-2").appendChild(result_div); 
    }
    else{
        var loosing_result_h2 = document.createElement('h2');
        loosing_result_h2.setAttribute("id", "loosing_result_h2_id");
        var resultTextNode = document.createTextNode(result);
        loosing_result_h2.appendChild(resultTextNode);
        result_div.appendChild(loosing_result_h2);
        document.getElementById("flex-box-container-2").appendChild(result_div); 
    }
    // replay button code..
    
    var replayButton = document.createElement('button');
    replayButton.setAttribute('id', 'replay_button_id');
    replayButton.setAttribute('onclick', 'window.location.reload();');
    var txt = document.createTextNode("Replay");
    replayButton.appendChild(txt);
    document.getElementById("result_div_id").appendChild(replayButton);
    
    myChoice.setAttribute("onclick", " ");
    var my_div = document.createElement('div');
    my_div.setAttribute("id", "my_div_id");
    my_div.appendChild(myChoice);
    document.getElementById("flex-box-container-2").appendChild(my_div);
}





















