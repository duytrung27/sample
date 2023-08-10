const Singleton = (function () {
  let instance;

  function createInstance() {
    return {
      message: "This is a Singleton instance",
      someMethod: function () {
        console.log("This is instance method");
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

let check;

const test = Object.freeze({
  getInstance: () => check,
  setInstance: (value) => (check = value),
});

const test1 = new Singleton.getInstance();
const test2 = new Singleton.getInstance();

const test4 = test.getInstance();
const test5 = test.getInstance();

console.log("test4 === test5  :>> ", test5 === test4);

console.log("test1 === test2  :>> ", test1 === test2);
test1.someMethod();
