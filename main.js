 $(document).ready(()=>{

    $( "#outcome" ).hide();
    const options = ['scissor', 'paper', 'rock'];
    const getRandomOption = () => {
     index = Math.floor(Math.random()*options.length)
    return options[index];
    }
    
    $("#rock img").click(function (event) {
        event.preventDefault();
        $( ".choices" ).hide();
        $( "#outcome" ).show();
        let result = getRandomOption(); 
        if (result === 'rock') {
            $("#outcome h2").text("The computer also picked Rock!: ");
            $("#outcome h3").text("No one won ");
        } else if ( result === 'scissor' ) {
            $("#outcome h2").text("The computer picked Scisoor:");
            $("#outcome h3").text("You won! Go celebrate! ");
        }else {
            $("#outcome h2").text(" The computer picked Paper: ");
            $("#outcome h3").text(" Sadly You lost :( ");
        }
    });

    $("#scissor img").click(function (event) {
        event.preventDefault();
        $( ".choices" ).hide();
        $( "#outcome" ).show();
        let result = getRandomOption(); 
        if (result === 'rock') {
            $("#outcome h2").text(" The computer picked Rock: ");
            $("#outcome h3").text(" Sadly You lost :( ");   
        } else if ( result === 'scissor' ) {
            $("#outcome h2").text("The computer also picked Scisor!: ");
            $("#outcome h3").text("No one won ");
        }else {
            $("#outcome h2").text("The computer picked Paper:");
            $("#outcome h3").text("You won! Go celebrate! ");
        }
    });

    $("#paper img").click(function (event) {
        event.preventDefault();
        $( ".choices" ).hide();
        $( "#outcome" ).show();
        let result = getRandomOption(); 
        if (result === 'rock') {
            $("#outcome h2").text("The computer picked Rock:");
            $("#outcome h3").text("You won! Go celebrate! ");          
        } else if ( result === 'scissor' ) {
            $("#outcome h2").text(" The computer picked Scissor: ");
            $("#outcome h3").text(" Sadly You lost :( "); 
        }else {
            $("#outcome h2").text("The computer also picked Paper!: ");
            $("#outcome h3").text("No one won ");
        }
    });

    $("#corona img").click(function (event) {
        event.preventDefault();
        $( ".choices" ).hide();
        $( "#outcome" ).show();
        let result = getRandomOption(); 
        if (result === 'rock') {
            $("#outcome h2").text("The computer picked Rock:");
            $("#outcome h3").text("You won! Go celebrate! ");            
        } else if ( result === 'scissor' ) {
            $("#outcome h2").text("The computer picked Scisoor:");
            $("#outcome h3").text("You won! Go celebrate! ");
        }else {
            $("#outcome h2").text("The computer picked Paper:");
            $("#outcome h3").text("You won! Go celebrate! ");
        }
    });


    $('#outcome button').on('click', function(e){
        $( ".choices" ).show();
        $( "#outcome" ).hide(); 
    });

 });

