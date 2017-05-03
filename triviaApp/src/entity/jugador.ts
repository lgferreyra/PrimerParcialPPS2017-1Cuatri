export class Jugador{

  private id : number;
  private nombre: string;
  private win: number=0;
  private lose: number=0;

  constructor(nombre : string, win?: number, lose?: number){
    this.nombre = nombre;
    if(win!=null){
      this.win = win;
      this.lose = lose;
    }
  }
  

  getName() : string{
    return this.nombre;
  }

  getWins() : number {
    return this.win;
  }

  getLose() : number {
    return this.lose;
  }

  triviaWin() {
    console.log("Correcto!");
    this.win++;
  }

  triviaLose() {
    console.log("Dedicate a otra cosa");
    this.lose++;
  }

  setId(id: number):void{
    this.id = id;
  }

}
