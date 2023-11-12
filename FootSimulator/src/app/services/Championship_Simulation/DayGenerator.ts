import {Team} from "../../Models/Team";
import {Day} from "../../Models/Simulation/Schedule/Day";
import {Match} from "../../Models/Simulation/Schedule/Match";

export class DayGenerator {

  public generateDays(_competitors:Set<Team>):Day[]
  {
    let teams = this.randomizePosition(Array.from(_competitors));
    let firstPhase = this.generateFirstPhase(teams);
    let secondPhase :Day[] = this.generateSecondPhase(firstPhase);

    return firstPhase.concat(secondPhase);
  }

  private randomizePosition(_tab:Array<any>) {
    var i, j, tmp;
    for (i = _tab.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = _tab[i];
      _tab[i] = _tab[j];
      _tab[j] = tmp;
    }
    return _tab;
  }

  private generateFirstPhase(_teams:Team[]):Day[]
  {
    const firstPhase: Day[] = [];
    const n = _teams.length;

    const rounds = n - 1;
    const totalMatchesPerRound = n / 2;

    // Crée une liste d'indices pour les équipes.
    const teamIndices = _teams.map((_, index) => index);

    for (let round = 0; round < rounds; round++) {
      const day = new Day();

      for (let i = 0; i < totalMatchesPerRound; i++) {
        const matchPair: [Team, Team] = [
          _teams[teamIndices[i]],
          _teams[teamIndices[n - 1 - i]],
        ];

        // 0 ou 1 pour que l'équipe à domicile soit choisie aléatoirement
        let randomInt = Math.floor(Math.random() * 2);

        let match: Match = new Match(matchPair[randomInt], matchPair[(randomInt + 1) % 2]);

        day.addOpposition(match);
      }

      // Fait pivoter les équipes pour la prochaine ronde
      teamIndices.splice(1, 0, teamIndices.pop() as number);

      firstPhase.push(day);
    }

    this.randomizePosition(firstPhase);
    return firstPhase;
  }

  private generateSecondPhase(_firstPhase:Day[]):Day[]{
    const secondPhase: Day[] = [];
    const n = _firstPhase[0].getNumberOfMatchs();

    // i = day index (numéro de la journée)
    for (let i = 0; i < _firstPhase.length; i++)
    {
      let day = new Day();
      // j = match index (index du match dans une journée)
      _firstPhase[i].getResults().forEach((match) =>
        day.addOpposition(new Match(match.getExtTeam(), match.getDomTeam())));
      secondPhase.push(day);
    }
    this.randomizePosition(secondPhase);
    return secondPhase;
  }

}
