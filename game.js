import { greet, message, generate_random_seq } from "./libFunctions.js";
const size_grid = [1, 2, 3, 4, 5];
const dificulty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dim_grids = [
  [2, 2],
  [2, 3],
  [3, 3],
  [3, 4],
  [3, 5],
];
let gameSquares = document.getElementById("game");
let board = document.getElementById("board");

// Esta clase se eencarga de crear el grid y de cambiar su color
class Squares {
  constructor(divPadre, size) {
    this.size = size;
    this.divPadre = divPadre;
    this.dificulty = dim_grids[size - 1][0] * dim_grids[size - 1][1];
    this.atribsOfSquares = ["col-3", "square"];
    this.squares = [];
  }
  crearGrid() {
    let listIds = this.generateListId(dim_grids[this.size - 1]);
    for (let i = 0; i < this.dificulty; i++) {
      let square = document.createElement("div");
      this.addAtribs(square, this.atribsOfSquares);
      console.log(listIds);
      square.setAttribute("id", listIds[i]);
      square.textContent = "Columns";
      this.squares.push(square);
    }
    console.log(this.divPadre);
    console.log(this.squares);
    for (let i = 0; i < this.squares.length; i++) {
      this.divPadre.appendChild(this.squares[i]);
    }
  }
  addAtribs(square, addAtribs) {
    addAtribs.forEach((atrib) => {
      square.classList.add(atrib);
    });
  }

  generateListId(grid) {
    let height = grid[0];
    let width = grid[1];
    let arr = [];
    for (let i = 0; i < height; i++) {
      arr[i] = [];
      for (let j = 0; j < width; j++) {
        arr[i][j] = "" + i + "," + j;
      }
    }

    return arr.flat(1);
  }

  replaceAttrib(oldAtrib, newAtrib) {
    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i].classList.remove(oldAtrib);
      this.squares[i].classList.add(newAtrib);
    }
  }
}

// Id de de div donde se monta, tipo de grid, tamaño de secuencia
const game = new Squares(board, 3);
game.crearGrid();

class SquareGame {
  constructor(size, dificulty) {
    this.size = size;
    this.buttonPlay;
    this.selectLvl;
    this.gmaeLose = false;
    this.square = new Squares(board,size)
    this.seqRandom = generate_random_seq(dificulty,dim_grids[size-1])
    this.seqPlayer=[]
  }
  init_buttons(){
      this.buttonPlay = document.getElementById("play")
      this.selectLvl = document.getElementsByTagName("select")[0]
  }
}

/*
seq.forEach((element) => {
  let idSquare = "" + element[0] + "," + element[1];
  let square = document.getElementById(idSquare);
  let intervalTime = 500;
  console.log(square);
  let on = setInterval(function () {
    square.style.backgroundColor = "black";
  }, 10000 - intervalTime);

  console.log(intervalTime);
});*/
