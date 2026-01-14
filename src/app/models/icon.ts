export class Icon {
  constructor(
    public content: string,
    public title: string,
    public description?: string
  ) {
    if (content.length !== 1) {
      throw new Error('Icon content must be a single character.');
    }
  }
}
