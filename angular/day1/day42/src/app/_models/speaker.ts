export class Speaker {
  constructor(
    public _id: number,
    public name: string,
    public image: string,
    public address: string,
    public birthDate: string,
    public hourRate: number,
    public isMarried: boolean,
    public government: string,
    public edit: boolean
  ) {}
}
