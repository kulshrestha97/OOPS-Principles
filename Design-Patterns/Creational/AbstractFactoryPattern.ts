/**
 * Base Interface for a chair
 */
interface Chair {
    sitDown();
}

/**
 * Base interface for a table
 */
interface Table {
    putItems();
}

/**
 * Abstract factory.
 */
// notice how it is an abstraction over the chair and table abstractions.
interface FurnitureFactory {
    createChair(): Chair;
    createTable(): Table;
}

// concrete class implementation
class VictorianChair implements Chair {
    sitDown() {
        console.log("Sitting on Victorian Chair");
    }
}
class ModernChair implements Chair {
    sitDown() {
        console.log("Sitting on Modern Chair");
    }
}

class VictorianTable implements Table {
    putItems() {
        console.log("Putting items on Victorian Table");
    }
}

class ModernTable implements Table {
    putItems() {
        console.log("Putting items on Modern Table");    
    }
}

class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    };
    createTable(): Table {
        return new ModernTable();
    }
}

class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }
    createTable(): Table {
        return new VictorianTable();
    }
}

function buildFurniture(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const table = factory.createTable();
    chair.sitDown();
    table.putItems();
}
buildFurniture(new VictorianFurnitureFactory());