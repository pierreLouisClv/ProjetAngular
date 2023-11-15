export class ScoreProbabilities {
    static winScoreProbabilities:Map<Array<number>, number> = new Map<Array<number>, number>();
    static drawScoreProbabilities:Map<Array<number>, number> = new Map<Array<number>, number>();

    static {
        this.winScoreProbabilities.set([1,0], 0.24);
        this.winScoreProbabilities.set([2,0], 0.45);
        this.winScoreProbabilities.set([2,1], 0.69);
        this.winScoreProbabilities.set([3,0], 0.78);
        this.winScoreProbabilities.set([3,1], 0.85);
        this.winScoreProbabilities.set([3,2], 0.89);
        this.winScoreProbabilities.set([4,0], 0.91);
        this.winScoreProbabilities.set([4,1], 0.93);
        this.winScoreProbabilities.set([4,2], 0.95);
        this.winScoreProbabilities.set([4,3], 0.96);
        this.winScoreProbabilities.set([5,0], 0.968);
        this.winScoreProbabilities.set([5,1], 0.976);
        this.winScoreProbabilities.set([5,2], 0.984);
        this.winScoreProbabilities.set([5,3], 0.988);
        this.winScoreProbabilities.set([6,0], 0.992);
        this.winScoreProbabilities.set([6,1], 0.996);
        this.winScoreProbabilities.set([6,2], 1);

        this.drawScoreProbabilities.set([0,0], 0.3);
        this.drawScoreProbabilities.set([1,1], 0.85);
        this.drawScoreProbabilities.set([2,2], 0.97);
        this.drawScoreProbabilities.set([3,3], 1);
    }

}
