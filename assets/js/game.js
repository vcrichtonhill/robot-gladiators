var fight = function(enemy) {

  // fight or run prompt
  while(playerInfo.health > 0 && enemy.health > 0) {
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if "skip"
    if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money
        playerInfo.money = Math.max(0, playerInfo.money -10);
        console.log("playerInfo.money", playerInfo.money)
        break;
      }
    }
    // attack enemy, random damage based on player attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

    // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        
        // award
        playerInfo.money = playerInfo.money + 20;
        // leave while() loop since enemy died
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
      
    // attack player
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    ); 

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      // leave loop 
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.")
    }
  } // end while loop
}; // end fight function

// function to start new game
var startGame = function() {
  // reset stats
playerInfo.reset();

  for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // round number
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      //pick new enemy
      var pickedEnemyObj = enemyInfo[i];

      //reset enemy health
      pickedEnemyObj.health = randomNumber(40, 60);

      // use debugger to pause script
      // debugger;

      //use variable
      fight(pickedEnemyObj);
      
      //if player is alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
    window.alert("Great job, you survived the game! You now have a score of " +playerInfo.money + ".");
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
      playerInfo.refillHealth();
      break;

    case "upgrade":
    case "UPGRADE":
      playerInfo.upgradeAttack();
      break;

    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");

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
// function to set name
var getPLayerName = function() {
  var name = "";

  while (name === "" || name === "null") {
    name = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + name);
  return name;
};


var playerInfo = {
  name: getPLayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
  }
  else {
    window.alert("You don't have enough money!");
  }
},
  upgradeAttack: function() {
    if (this.money >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  }
  else {
    window.alert("You don't have enough money!");
    }
  }
};

var enemyInfo = [
  {
    name: "Roberto",
    attack: randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10,14)
  }
];

// start game when page loads
startGame ();
