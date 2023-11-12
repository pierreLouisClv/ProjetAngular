export class ScoreProbabilities {
    static winScoreProbabilities:Map<Array<number>, number> = new Map<Array<number>, number>();
    static drawScoreProbabilities:Map<Array<number>, number> = new Map<Array<number>, number>();

    static {
        this.winScoreProbabilities.set([1,0], 0.21);
        this.winScoreProbabilities.set([2,0], 0.39);
        this.winScoreProbabilities.set([2,1], 0.6);
        this.winScoreProbabilities.set([3,0], 0.66);
        this.winScoreProbabilities.set([3,1], 0.75);
        this.winScoreProbabilities.set([3,2], 0.81);
        this.winScoreProbabilities.set([4,0], 0.84);
        this.winScoreProbabilities.set([4,1], 0.88);
        this.winScoreProbabilities.set([4,2], 0.91);
        this.winScoreProbabilities.set([4,3], 0.935);
        this.winScoreProbabilities.set([5,0], 0.95);
        this.winScoreProbabilities.set([5,1], 0.97);
        this.winScoreProbabilities.set([5,2], 0.975);
        this.winScoreProbabilities.set([5,3], 0.978);
        this.winScoreProbabilities.set([6,0], 0.988);
        this.winScoreProbabilities.set([6,1], 0.995);
        this.winScoreProbabilities.set([6,2], 1);

        this.drawScoreProbabilities.set([0,0], 0.3);
        this.drawScoreProbabilities.set([1,1], 0.85);
        this.drawScoreProbabilities.set([2,2], 0.97);
        this.drawScoreProbabilities.set([3,3], 1);
    }

}
