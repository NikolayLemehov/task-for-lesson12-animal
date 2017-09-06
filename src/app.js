/**
 * Created by IlyaLitvinov on 10.04.17.
 */
//import './styles.styl';

//Д.з. описать цепочку наследования Animal-Horses-Pony, Animal-Cats-tiger Animal-Birds-Eagle

class Animal {
  constructor(name, age, sex, weight) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.weight = weight
  }

  move() {
    console.log('Животное ' + this.name + ' двигается.');
  }

  eat() {
    console.log(this.name + ' animal eat');
  }

  sleep() {
    console.log(this.name + ' animal sleep');
  }
}

class Horses extends Animal {
  constructor(name, age, sex, weight, isShoe) {
    super(name, age, sex, weight);
    this.isShoe = isShoe;
  }
  move() {
    console.log('Лошадь ' + this.name + ' может бегаеть хотя ей уже ' + this.age + ' лет.');
  }
}

class Pony extends Horses {
  constructor(name, age, sex, weight, isShoe) {
    super(name, age, sex, weight, isShoe);
  }
  move() {
    console.log('Пони ' + this.name + ' бегает.');
  }
}

class Cats extends Animal {
  constructor(name, age, sex, weight, runningSpeed) {
    super(name, age, sex, weight);
    this.runningSpeed = runningSpeed;
  }

  move() {
    console.log('Кошка ' + this.name + ' бегает со скоростью ' + this.runningSpeed + ' км в час.');
  }

  hunting(Animal) {
    console.log('Кошка ' + this.name + ' охотиться на животное ' + Animal.name);
  }
}

class Tiger extends Cats {
  constructor(name, age, sex, weight, runningSpeed) {
    super(name, age, sex, weight, runningSpeed);
  }
  hunting(Animal) {
    console.log('Тигр ' + this.name + ' охотиться на животное ' + Animal.name);
  }
}

class Birds extends Animal {
  constructor(name, age, sex, weight, airSpeed, wingspan) {
    super(name, age, sex, weight);
    this.airSpeed = airSpeed;
    this.wingspan = wingspan;
  }

  toNest() {
    console.log('Птица ' + this.name + ' вьёт гнездо.');
  }

  move() {
    console.log('Птица ' + this.name + ' летает со скоростью ' + this.airSpeed + ' км в час.');
  }
}

class Eagle extends Birds {
  constructor(name, age, sex, weight, airSpeed, vingspan) {
    super(name, age, sex, weight, airSpeed, vingspan);
  }
  move() {
    console.log('Орёл ' + this.name + ' летает со скоростью ' + this.airSpeed + ' км в час.');
  }
}

const animalMasha = new Animal('Masha', 5, 'femal', 150);
const catChub = new Cats('Chub', 4, 'male', 50, 45);
const birdSenya = new Birds('Senya', 9, 'male', 6, 50, 1.2);
const horseDasha = new Horses('Dasha', 30, 'female', 600, 'подкована');
const tigerJohn = new Tiger('John', 15, 'male', 200, 60);
const ponyLoya = new Pony('Loya', 17, 'female', 170, 'не подкована');
const eagleKesha = new Eagle('Kesha', 8, 'male', 7, 55, 1.3);
animalMasha.move();
catChub.hunting(animalMasha);
catChub.move();
birdSenya.toNest();
birdSenya.move();
horseDasha.move();
ponyLoya.move();
tigerJohn.hunting(ponyLoya);
eagleKesha.move();
eagleKesha.eat();
eagleKesha.sleep();