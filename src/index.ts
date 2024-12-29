import { DressUpGame } from "./GameLogic";

// Wait for the page to load
window.onload = () => {
  document.body.style.display = 'block'; // or remove a "hidden" class
};

// Initialize the game
const game = new DressUpGame();