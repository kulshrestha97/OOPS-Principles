// create interface of subscriber (should have an update method);
interface ISubscriber {
  id: string;
  name: string;
  update(message: string);
  subscribedTo: MagazineGenre;
}
// create an interface for publisher, should have add, remove, and notify methods.
interface IPublisher {
  addSubscriber(subscriber: ISubscriber): void;
  removeSubscriber(id: string): void;
  notifySubscribers(magazine: IMagazine);
}

type MagazineGenre = "Action" | "Superhero" | "Tech";
interface IMagazine {
  name: string;
  pages: number;
  author: string;
  genre: MagazineGenre;
}

// publisher class
class Publisher implements IPublisher {
  private subscribers: ISubscriber[] = [];
  private magazines: IMagazine[] = [];
  // add a product
  addMagazine(magazine: IMagazine) {
    this.magazines.push(magazine);
    this.notifySubscribers(magazine);
  }
  // add a subscriber to the list.
  addSubscriber(subscriber: ISubscriber) {
    this.subscribers.push(subscriber);
    console.log("Added Subscriber", { subscriber });
  }
  // remove a subscriber from the list.
  removeSubscriber(id: string) {
    this.subscribers = this.subscribers.filter((s) => s.id !== id);
  }
  // notify subscribers when the thing they subscribed to is available/updated.
  notifySubscribers(magazine: IMagazine) {
    this.subscribers.forEach((subscriber) => {
      if (subscriber.subscribedTo === magazine.genre) {
        subscriber.update(
          `Dear ${subscriber.name}! checkout the new edition of ${magazine.name}!`
        );
      }
    });
  }
}

class Subscriber implements ISubscriber {
  public id: string = "";
  public name: string = "";
  public subscribedTo: MagazineGenre;
  update(message: string) {
    console.log("From Publisher:: ", message);
  }
  constructor(name: string, subscribedTo: MagazineGenre) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.subscribedTo = subscribedTo;
  }
}

const pub = new Publisher();
const subA = new Subscriber('Rajat', 'Action');
const subA2 = new Subscriber('Shivanshi', 'Action');
const subB = new Subscriber('Aditya', 'Superhero');
const subC = new Subscriber('Rohit', 'Tech');
pub.addSubscriber(subA);
pub.addSubscriber(subA2);
pub.addSubscriber(subB);
pub.addSubscriber(subC);
pub.addMagazine({author: 'Rob', genre: 'Action', pages: 213, name: 'Indiana Joanes'})
