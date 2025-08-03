/**
 * Generic interface for Stack operations.
 * @template T type of stack
 */
interface IStack<T> {
  /**
   * pushes an element at the end of stack.
   * @param value element of type `T`
   * @returns true if the element was added succesfully, else false.
   */
  push(value: T): boolean;
  /**
   * removes and returns the element that was at the end of stack.
   */
  pop(): T | undefined;
  /**
   * Returns the number of elements in the stack.
   */
  size(): number;
  /**
   * prints the stack on console.
   */
  toString(): void;
}

class Stack<T> implements IStack<T> {
  private array: T[];
  /**
   * Initializes a stack of
   * @template T
   */
  constructor() {
    this.array = [];
  }
  public push(value: T): boolean {
    this.array.push(value);
    return true;
  }
  public pop(): T | undefined {
    return this.array.pop();
  }
  public size(): number {
    return this.array.length;
  }
  public toString() {
    console.log("The Stack is:");
    this.array.forEach((value) => console.log(value));
  }
}

let myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.size());
console.log("Popped: ", myStack.pop());
myStack.toString();
