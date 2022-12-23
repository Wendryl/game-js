import { Food } from "./Food.js";
import { Game } from "./Game.js";
import { Snake } from "./Snake.js";

const canvas = document.querySelector("canvas");
const tileSize = 20;

const food = new Food(canvas);
const snake = new Snake();
const game = new Game(canvas, tileSize, snake, food);
