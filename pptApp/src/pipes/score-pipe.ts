import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ScorePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'score-pipe',
})
export class ScorePipe implements PipeTransform {
  
  transform(scores: any, value: any) {

    return scores.filter((score)=>{
      return score.resultado==value;
    });
  
}

}
