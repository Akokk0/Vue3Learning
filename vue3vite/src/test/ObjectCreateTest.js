// JS中对象可以先创建再定义

function Observer() {
    this.habit = ['抽烟', '喝酒', '烫头']
}

function Person() {
    this.name = 'zs'
    this.age = 20
}

function Human() {
    this.sex = 1
}

Person.prototype = new Human
Observer.prototype = new Person
/*Person.__proto__ = Human*/

const obs = new Observer()

console.log('--------------------------')

/*console.log(Observer.prototype)
console.log(Observer.__proto__)
console.log(Observer.prototype.prototype)
console.log(Observer.prototype.__proto__)
console.log(obs.__proto__.__proto__)

console.log(Observer.prototype === obs.__proto__)*/

/*console.log(Person)
console.log(1)*/

console.log(obs.sex)
console.log(1)
