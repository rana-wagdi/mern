export class Speaker {
  constructor(
    public _id: number,
    public fullName: string,
    public role: string,
    public address: object,
    public email: string,
    public password: string,
    public image: string
  ) {}
}
