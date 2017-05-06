export class Jugador{

  private id : number;
  private nombre: string;
  private win: number=0;
  private lose: number=0;
  private tie: number=0;
  private resultado: string;

  constructor(nombre : string, win?: number, lose?: number, tie?: number){
    this.nombre = nombre;
    if(win!=null){
      this.win = win;
      this.lose = lose;
      this.tie = tie;
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

  getTie() : number {
    return this.tie;
  }

  getResultado() : string {
    return this.resultado;
  }

  triviaWin() {
    this.win++;
    this.resultado = "W";
  }

  triviaLose() {
    this.lose++;
    this.resultado = "L";
  }

  triviaTie() {
    this.tie++;
    this.resultado = "T";
  }

  setId(id: number):void{
    this.id = id;
  }

}
