function LRUCache(cap, init) {

  this.storage = [];

  var capacity = cap;

  this.cache = function(key, value) {
    if (this.storage.indexOf(key) > -1) {
      this[key] = value;
      return this;
    }
    this.storage.push(key);
    if (this.storage.length > this.capacity) {
      this.delete(this.storage[0]);
    }
    var actualKey = key;
    Object.defineProperty(this, key, {
      get: function() {
        return key;
      },
      set: function(newValue) {
        key = newValue;
        if (newValue == undefined) {
          return;
        }
        var index = this.storage.indexOf(actualKey);
        if (index !== -1) {
          this.storage.splice(index, 1);
          this.storage.push(actualKey);
        }
      },
      enumerable: true,
      configurable: true
    });
    this[key] = value;
    return this;
  }

  this.delete = function(key) {
    if (key.length === 1) {
      delete this[key];
      var deleteIndex = this.storage.indexOf(key);
      if (deleteIndex > -1) {
        this.storage.splice(deleteIndex, 1);
      }
      return true;
    }
    return false;
  }

  //False is already default, but here for understanding
  Object.defineProperties(this, {
    'cache': {
      enumerable: false,
      configurable: false
    },
    'storage': {
      enumerable: false,
      configurable: false
    },
    'size': {
      get: function() {
        return this.storage.length;
      },
      enumerable: false,
      configurable: false
    },
    'delete': {
      enumerable: false,
      writable: false,
      configurable: false
    },
    'capacity': {
      get: function() {
        return capacity;
      },
      set: function(cap) {
        capacity = cap;
        while (this.storage.length > capacity) {
          this.delete(this.storage[0]);
        }
      }
    }
  })

  if (init) {
    var key = Object.keys(init);
    this.cache(key[0], init[key]);
  }
}