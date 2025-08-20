class HouseBuilder {
  private rooms: number[] = [];
  private area: number = 0;
  private color: string = ""; 

  addRoom(width: number, height: number) {
    const roomSize = width * height;
    this.rooms.push(roomSize);
    this.area += roomSize;
    return this;
  }
  addColor(color: string) {
    this.color = color;
    return this;
  }
  addLawn(area: number) {
    this.area += area;
    return this;
  }
  addBackyard(area: number) {
    this.area += area;
    return this;
  }
  build() {
    return {
        area: this.area,
        rooms: this.rooms,
        color: this.color
    }
  }
}

const house = new HouseBuilder();
house
  .addRoom(10, 8)
  .addRoom(10, 8)
  .addRoom(12, 10)
  .addBackyard(125)
  .addLawn(125)
  .addColor("White")
  .build();
