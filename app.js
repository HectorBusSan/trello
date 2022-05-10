const Trello= require('./main');
var trello= new Trello("key","token");
var cardTitle= `Card Nueva ${new Date()}`;

console.log("Ejecutando");
console.log(Trello.prototype.addCard);

trello.addCard(cardTitle,"LaunchX Card Description", "IdList",
    function(error,trelloCard){
        if(error){
            console.log('Could not add card: ',error);
        }
        else{
            console.log('Added card: ',trelloCard);
        }
    });
// La función Trello.prototype.addCard
// Esta nos permite crear cards para tableros en trello
