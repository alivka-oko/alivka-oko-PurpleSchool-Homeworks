(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  class User {
    constructor(task) {
      this.task = task;
    }
    do() {
      return this.task.run();
    }
  }

  class Task {
    constructor(message) {
      this.message = message;
    }
    run() {
      console.log(this.message);
    }
  }

  const task = new Task("Hello world!");
  const user = new User(task);
  user.do();

}));
