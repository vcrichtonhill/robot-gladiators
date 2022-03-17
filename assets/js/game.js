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
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
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

// function to start new game
var startGame = function() {
  // reset stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      // round number
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      //pick new enemy
      var pickedEnemyName = enemyNames[i];

      //reset enemy health
      enemyHealth = 50;

      // use debugger to pause script
      // debugger;

      //use variable
      fight(pickedEnemyName);
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }  
  } 

  // after loop ends
  endGame();
};

// function to end game
var endGame = function() {
  // if player is still alive, they win
  if (playerHealth > 0) {
    window.alert("Great job, you survived the game! You now have a score of " +playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }

  //play again?
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restart
    startGame();
  }
  else {
    window.alert("Thanks for playing!");
  }
};

// fight();



// start game when page loads
startGame ();
