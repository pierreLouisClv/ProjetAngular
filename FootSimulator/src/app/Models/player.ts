export class Player {

  public name: string = "";
  public age: number = 0;
  public club: string = "";
  public nation: string = "";
  public id: number = 0;
  public position: string = "";
  public precision: string = "";
  public picture: string = "";
  public rating: number = 0;

  public getPicture(): string {
    return this.picture;
  }

  public setPicture(value: string): void {
    this.picture = value;
  }

  public getRating(): number {
    return this.rating;
  }

  public setRating(value: number): void {
    this.rating = value;
  }


  public getName(): string {
    return this.name;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(value: number): void {
    this.age = value;
  }

  public getClub(): string {
    return this.club;
  }

  public setClub(value: string): void {
    this.club = value;
  }

  public getNation(): string {
    return this.nation;
  }

  public setNation(value: string): void {
    this.nation = value;
  }

  public getId(): number {
    return this.id;
  }

  public setId(value: number): void {
    this.id = value;
  }

  public getPosition(): string {
    return this.position;
  }

  public setPosition(value: string): void {
    this.position = value;
  }

  public getPrecision(): string {
    return this.precision;
  }

  public setPrecision(value: string): void {
    this.precision = value;
  }
}
