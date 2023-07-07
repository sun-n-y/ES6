//
// const tom = {
//   firstName: 'tom',
//   lastName: 'smith',
//   sayName: function () {
//     console.log(this);
//     const self = this;
//     setTimeout(function () {
//       console.log(self);
//       console.log(`hello my name is ${self.firstName} ${self.lastName}`);
//     }, 2000);
//   },
// };

//use arrow funciton
const tom = {
  firstName: 'tom',
  lastName: 'smith',
  sayName: function () {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(`hello my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

const joe = {
  firstName: 'joe',
  lastName: 'dean',
  sayName: () => {
    console.log(this);
    console.log(`hello my name is ${this.firstName} ${this.lastName}`);
  },
};

// tom.sayName();
joe.sayName();
