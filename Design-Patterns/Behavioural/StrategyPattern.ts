// this is our strategy interface
interface IDatabase {
  connect(connectionString: string): boolean;
  disconnect(): boolean;
  execute(): boolean;
}

// algorithm 1 - mssql has to implement the strategy interface.
class MSSql implements IDatabase {
  private isConnected: boolean = false;
  connect(connectionString: string): boolean {
    console.log("Connecting to MSSQL...", connectionString);
    setTimeout(() => {
      console.log("Successfully connected!!");
      this.isConnected = true;
    }, 2000);
    return true;
  }
  disconnect(): boolean {
    if (!this.isConnected) {
      throw new Error("No existing connection...");
    }
    console.log("Disconnecting...");
    setTimeout(() => {
      console.log("Successfully disconnected!");
      this.isConnected = false;
    });
    return this.isConnected;
  }
  execute(): boolean {
    console.log("Executing..");
    return true;
  }
}
// MongoDB has to implement Strategy interface.
class MongoDB implements IDatabase {
    private isConnected: boolean = false;
    connect(connectionString: string): boolean {
        console.log("connecting to mongodb..", connectionString);
        this.isConnected = true;
        return true;
    }
    disconnect(): boolean {
        if(!this.isConnected) {
            throw new Error("No existing connection");
        }
        console.log("Disconnecting MongoDB");
        return true;
        
    }
    execute(): boolean {
        console.log("executing MongoDB command...");
        return true;
    }
}

// Database Service is the context that can switch the strategy based on the use case.
class DatabaseService {
    private Database: IDatabase;
    constructor(db: IDatabase) {
        this.Database = db;
    }
    getDataPoints(query: string) {
        this.Database.connect(query);
        this.Database.execute();
    }
}

const noSQLdbService = new DatabaseService(new MongoDB());
const sqlDbService = new DatabaseService(new MSSql());

