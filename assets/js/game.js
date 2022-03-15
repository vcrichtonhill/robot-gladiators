var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Andriod", "Robo Trumblen"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight === "fight" || promptFight === "FIGHT") {
    
    // attack enemy
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      }
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      
    // attack player
      playerHealth = playerHealth - enemyAttack;

      console.log(
           enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            ) 

    // check player's health
    if (playerHealth <=0) {
      window.alert(playerName + " has died!")
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.")
    }
  }

  // if player chooses skip
  else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm
    var confirmSkip = window.confirm("Are you sure you want to quit?")

    // if yes, leave fight
    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight. Goodbye.");
      // subtract money
      playerMoney = playerMoney - 2;
    } 
    // if no, ask question again
    else {
      fight ();
    } 
  }  
  else {
    window.alert("You need to choose a valid option. Try again!")
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}