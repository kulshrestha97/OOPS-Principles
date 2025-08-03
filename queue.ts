/**
 * Generic implementation of queue.
 */
class Queue<T> {
  private _array: T[];
  /**
   * Initializes a queue. Follows FIFO strategy.
   */
  constructor() {
    this._array = [];
  }
  /**
   * Adds an item or items at the end of the queue.
   * @param value a single item or a list.
   */
  public Enqueue(value: T): boolean;
  public Enqueue(range: T[]): boolean;
  public Enqueue(value: T | T[]) {
    if (Array.isArray(value)) {
      this._array.push(...value);
      return true;
    } else {
      this._array.push(value);
      return true;
    }
  }
  /**
   * Removes an item at the start of the queue.
   * @returns dequeued value.
   */
  public Dequeue(): T {
    const value =  this._array.shift()
    if(value) {
       return value 
    } else {
        throw new Error('Empty Queue')
    }
  }
  /**
   * prints current queue alongwith its size.
   */
  public ToString() {
    console.log('Current Queue:');
    this._array.forEach(value => console.log(value));
    console.log('Size is - ', this._array.length)
  }
}

let myQueue = new Queue<number>();
myQueue.Enqueue(1);
myQueue.Enqueue([2,3,4,5]);
myQueue.ToString();
console.log('Dequeued', myQueue.Dequeue())
myQueue.ToString()
