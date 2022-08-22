class EventHub {
  constructor() {
    this.topics = {};
  }

  // 订阅
  on(topic, fn) {
    if (!(topic in this.topics)) {
      this.topics[topic] = [];
    }
    this.topics[topic]?.push(fn);
  }

  // 发布
  emit(topic, ...args) {
    if (!(topic in this.topics)) {
      return false;
    }

    this.topics[topic]?.forEach((fn) => {
      fn(...args);
    });
  }

  // 取消订阅
  off(topic, fn = null) {
    if (!(topic in this.topics)) {
      return false;
    }

    if (fn && typeof fn === "function") {
      this.topics[topic]?.forEach((item, index) => {
        if (item === fn) {
          this.topics[topic]?.splice(index, 1);
        }
      });
    } else {
      this.topics[topic].length = 0;
    }
  }

  once(topic, fn) {
    const that = this;

    function one() {
      fn.apply(this, arguments);
      that.unsubscribe(topic);
    }

    this.subscribe(topic, one);
  }
}

const eventHub = new EventHub();

export default eventHub;
