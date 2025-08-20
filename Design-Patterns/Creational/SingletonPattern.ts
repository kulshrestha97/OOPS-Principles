// Singleton class - one instance only

// Three steps to create:
// 1. create a private static instance
// 2. make default constructor private.
// 3. create a public static method that returns the instance if created earlier, 
// otherwise assigns the Singleton instance to the private member and returns that.
class Singleton {
    private static instance: Singleton;
    private constructor() {
        
    }
    public static getInstance() {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();    
        }
        return Singleton.instance;
    }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
if(s1===s2) {
    console.log("They point towards same instances");
    
}