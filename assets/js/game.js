var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Andriod", "Robo Trumblen"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  // fight or run prompt
  while(playerHealth > 0 && enemyHealth > 0) {
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if "skip"
    if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm
      var confirmSkip = window.confirm("Are you sure you'd like to quit>");
    
      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money
        playerMoney = playerMoney -10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }
    // attack enemy
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        
        // award
        playerMoney = playerMoney + 20;
        // leave while() loop since enemy died
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      
    // attack player
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    ); 

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave loop 
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.")
    }
  } // end while loop
}; // end fight function

for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
} 

// fight();
