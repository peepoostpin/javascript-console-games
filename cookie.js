// BTW SO LIKE THERE AR A FEW BUGS SO LIKE YE LIEK OVENS AND THAT DONT WORK YET BUT I WILL FIX IT BECAUSE IM COOL

let cookies = 0;
let clickMultiplier = 1;
let ovenMultiplier = 1;
let factoryMultiplier = 1;
let ovenInterval;
let factoryInterval;

const clickCookie = () => {
  if (!powerOff) {
    cookies += 1 * clickMultiplier;
    console.log(`You have ${cookies} cookie(s).`);
  } else {
    console.log("Power is currently OFF. You cannot click cookies.");
  }
};

const bakeCookies = () => {
  console.log("Bake Cookies function called");
  if (!powerOff && gameRunning) {
    cookies += 1 * ovenMultiplier;
    console.log(`Your Cookie Oven is baking cookies. You now have ${cookies} cookie(s).`);
  }
};

const produceCookies = () => {
  if (!powerOff && gameRunning) {
    cookies += 1 * factoryMultiplier;
    console.log(`Your Cookie Factory is producing cookies. You now have ${cookies} cookie(s).`);
  }
};


console.log("Welcome to Cookie Clicker! To click the cookie, type 'c' and press Enter. To open the shop, type 's' and press Enter. To quit the game, type 'e' and press Enter.");

let gameRunning = true;
let powerOff = false;

// Set intervals for ovens and factories outside of main game loop
ovenInterval = setInterval(bakeCookies, 1000);
factoryInterval = setInterval(produceCookies, 1000);

while (gameRunning) {
  const input = prompt("What would you like to do?");
  switch (input) {
    case "c":
      clickCookie();
      break;
    case "p":
      if (powerOff) {
         powerOff = false;
         console.log("Power is now ON. You can click cookies again.");
      } else {
        powerOff = true;
        console.log("Power is now OFF. You can only use ovens and factories to produce cookies.");
      }
      break;
    case "s":
      console.log("Welcome to the shop! Here are the available items:");
      console.log("1. Automatic Cookie Clicker (100 cookies)");
      console.log("2. Cookie Oven (250 cookies)");
      console.log("3. Cookie Factory (500 cookies)");
      console.log("Type the number of the item you want to buy and press Enter.");
      console.log("Type 'exit' to exit the shop.");
      let shopRunning = true;
      while (shopRunning) {
        const shopInput = prompt("What would you like to do?");
        switch (shopInput) {
          case "1":
            if (cookies >= 100) {
              console.log("You have purchased the Automatic Cookie Clicker. Cookies will now be automatically collected for you.");
              cookies -= 100;
              clickMultiplier += 2;
              shopRunning = false;
            } else {
              console.log("You don't have enough cookies to buy this item. Please choose another item or type 'exit' to exit the shop.");
            }
            break;
          case "2":
            if (cookies >= 250) {
              console.log("You have purchased the Cookie Oven. Your cookie production has increased.");
              cookies -= 250;
              ovenMultiplier += 2;
              ovenInterval = setInterval(bakeCookies, 1000);
              shopRunning = false;
            } else {
              console.log("You don't have enough cookies to buy this item. Please choose another item or type 'exit' to exit the shop.");
            }
            break;
          case "3":
            if (cookies >= 500) {
              console.log("You have purchased the Cookie Factory. Your cookie production has greatly increased.");
              cookies -= 500;
              factoryMultiplier += 5;
              factoryInterval = setInterval(produceCookies, 1000);
              shopRunning = false;
            } else {
              console.log("You don't have enough cookies to buy this item. Please choose another item or type 'exit' to exit the shop.");
            }
            break;
          case "exit":
            console.log("Exiting the shop...");
            shopRunning = false;
            break;
          default:
            console.log("Invalid input. Please try again.");
            break;
        }
      }
      break;
    case "e":
      console.log("Thanks for playing Cookie Clicker! Goodbye.");
      clearInterval(ovenInterval);
      clearInterval(factoryInterval);
      powerOff = false;
      gameRunning = false;
      break;
    default:
      console.log("Invalid input. Please try again.");
      break;
  }
}
