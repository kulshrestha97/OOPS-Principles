/**
 * Factory Pattern is a creational design pattern, 
 * that allows you to decouple the object creation 
 * and executing different business rules through different different objects
 * look at Refactoring.guru's Factory Method problem
 */

// common interface that the products have to follow.
interface Transport {
    deliver (from: string, to: string);
    
}

// Product A
class Truck implements Transport {
    constructor() {
        console.log("Truck instantiated");
        
    }
    deliver(from: string, to: string) {
        console.log("Truck Delivery called", from, to);
        
    }
}
// Product B
class Boat implements Transport {
    constructor() {
        console.log("Boat instantiated");
        
    }
    deliver(from: string, to: string) {
        console.log("Boat Delivery called", from, to);
    }
}

class Airplane implements Transport {
    constructor() {
        console.log("Airplane instantiated");
        
    }
    deliver(from: string, to: string) {
        console.log("Airplane Delivery called", from, to);
    }
}


// blueprint of factory that forces the subclasses to implement the factory method (create transport).
abstract class LogisticsFactory {
    abstract createTransport(): Transport; 
}

class RoadLogistics extends LogisticsFactory {
    createTransport(): Transport {
        return new Truck();
    }
}
class SeaLogistics extends LogisticsFactory {
    createTransport(): Transport {
        return new Boat();
    }
}
/**
 * adding a new product is super easy
 * 1. Add the Product that implements the Product Interface.
 * 2. Add the Factory that extends the abstract Factory class (this forces the factory class to implement the factoryMethod)
 */
class AirplaneLogistics extends LogisticsFactory {
    createTransport(): Transport {
        return new Airplane();
    }
}
// Client code:
// this way, client is not aware of what exactly is the underlying implementation of delivery.
function scheduleDelivery(mode: LogisticsFactory, from: string, to: string) {
    const transport = mode.createTransport();
    transport.deliver(from, to);
}

scheduleDelivery(new AirplaneLogistics(), 'A', 'B')
scheduleDelivery(new RoadLogistics(), 'B', 'C');
scheduleDelivery(new SeaLogistics(), 'C', 'D')