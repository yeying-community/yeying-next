
export class Asset {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}