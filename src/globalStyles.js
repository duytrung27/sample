let instance;

let state = {
  color: "",
};

class Test {
  constructor() {
    if (instance) {
      throw new Error("Can not create new instance");
    }

    instance = this;
  }

  getPropertyByName(name) {
    return state[name];
  }

  setPropertyValue(name, value) {
    state[name] = value;
  }
}

let stateUtils = Object.freeze(new Test());

export default stateUtils;
