// Customer interface
interface ICustomer {
    name: string,
    getId(): string,
}

// Product interface
interface IProduct {
    name: string,
    getId(): string,
    getCustomers(): ICustomer[],
    addCustomer(customer: ICustomer): void;
    removeCustomer(id: string): void;
    getCustomerById(id: string): ICustomer;
}

class Customer implements ICustomer {
    name: string;
    private readonly id: string;
    constructor(id: string, name: string) {
        this.name = name;
        this.id = id;
    }
    getId(): string {
        return this.id;
    }
}

class Product implements IProduct {
    name: string;
    private readonly id: string
    private customers: ICustomer[] // Product is "associated" with customers, it is NOT a "whole-part" relationship.
    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
        this.customers = [];
    }
    removeCustomer(id: string): void {
        this.customers = this.customers.filter((c) => c.getId() !==id);
    }
    getCustomerById(id: string): ICustomer {
        const customer = this.customers.find((customer) => customer.getId() == id);
        if(!customer) {
            throw new Error(`Unable to find a customer with id -${id}`);
        }
        return customer;
    }
    getId(): string {
        return this.id;
    }
    getCustomers(): ICustomer[] {
        return this.customers;
    }
    addCustomer(customer: ICustomer) {
        this.customers.push(customer);
    }

}

function main() {
    const customer1 = new Customer(crypto.randomUUID().toString(), 'Customer 1');
    const customer2 = new Customer(crypto.randomUUID().toString(), 'Customer 2');
    const product = new Product("Product 1", crypto.randomUUID().toString());
    product.addCustomer(customer1); // we are not creating objects inside product, so product doesn't own lifecycle of customer. NOT A COMPOSITION.
    product.addCustomer(customer2);
    product.getCustomers();
}

main();
export {};