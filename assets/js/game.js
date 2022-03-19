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
        playerMoney = Math.max(0, playerMoney -10);
        console.log("playerMoney", playerMoney)
        break;
      }
    }
    // attack enemy, random damage based on player attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
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
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
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
      enemyHealth = randomNumber(40, 60);

      // use debugger to pause script
      // debugger;

      //use variable
      fight(pickedEnemyName);
      
      //if player is alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask to visit shop
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes
        if (storeConfirm) {   
        shop();
      }
    } 
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

var shop = function() {
  //ask player what they'd like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

  //switch to carry out action
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");

      // increase health, decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
    }
      else {
        window.alert("You don't have enough money!");
      }
      break;

    case "upgrade":
    case "UPGRADE":
      if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");

      //increase attack, decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;

    case "leave":
    case "LEAVE":
      window.playerMoney("Leaving the store.");

    //do nothing, function ends
    break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      // call shop again
      shop()
      break;
  }
};

// function to generate a random number
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// fight();



// start game when page loads
startGame ();
