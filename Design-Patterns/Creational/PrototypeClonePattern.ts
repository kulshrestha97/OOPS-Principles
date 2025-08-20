type Gender = 'M' | 'F'
interface User {
    setName(name: string);
    setAge(age: number);
    setGender(gender: Gender);
    clone(): User
}

class UserA implements User {
    private name: string;
    private age: number;
    private gender: Gender;
    constructor(name: string, age: number, gender: Gender) {
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    setAge(age: number) {
        this.age = age;
    }
    setName(name: string) {
        this.name = name;
    }
    setGender(gender: Gender) {
        this.gender = gender;
    }
    clone() {
        return new UserA(this.name, this.age, this.gender);
    }
}
const user1A = new UserA('Rajat', 28, 'M');
const user2A = user1A.clone();