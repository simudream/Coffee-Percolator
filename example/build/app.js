// Generated by CoffeeScript 1.4.0
(function() {
  var Aardvark, Animal, App, Elephant, Head, Leg, Logger, Mammal, ObjectUtils, Place, Printer, Snout, Tail, Trunk, Zoo,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Place = (function() {

    function Place() {}

    Place.prototype.constuctor = function(name) {
      this.name = name != null ? name : 'anywhere';
    };

    return Place;

  })();

  ObjectUtils = {
    isArray: function(obj) {
      return '[object Array]' === Object.prototype.toString.call(obj);
    }
  };

  Logger = {
    log: function() {
      if (console) {
        return console.log.apply(console, arguments);
      }
    }
  };

  Animal = (function() {

    function Animal(name, body) {
      this.name = name != null ? name : 'Animal';
      this.body = body != null ? body : {};
      Logger.log("I'm alive!", this);
    }

    return Animal;

  })();

  Head = (function() {

    function Head(name, bits) {
      this.name = name != null ? name : 'Head';
      this.bits = bits != null ? bits : [];
    }

    return Head;

  })();

  Leg = (function() {

    function Leg(name) {
      this.name = name != null ? name : 'Leg';
    }

    return Leg;

  })();

  Mammal = (function(_super) {

    __extends(Mammal, _super);

    function Mammal() {
      Mammal.__super__.constructor.apply(this, arguments);
      this.body.legs = [];
      this.body.head = new Head();
    }

    Mammal.prototype.addLegs = function(howMany) {
      var i, _i, _results;
      _results = [];
      for (i = _i = 1; 1 <= howMany ? _i <= howMany : _i >= howMany; i = 1 <= howMany ? ++_i : --_i) {
        _results.push(this.body.legs.push(new Leg("Leg " + i)));
      }
      return _results;
    };

    return Mammal;

  })(Animal);

  Snout = (function() {

    function Snout(name, length) {
      this.name = name != null ? name : 'Snout';
      this.length = length != null ? length : 10;
    }

    return Snout;

  })();

  Tail = (function() {

    function Tail() {}

    return Tail;

  })();

  Aardvark = (function(_super) {

    __extends(Aardvark, _super);

    function Aardvark() {
      Aardvark.__super__.constructor.apply(this, arguments);
      this.name = 'Aardvark';
      this.body.head.bits.push(new Snout());
      this.body.tail = new Tail();
      this.addLegs(4);
    }

    return Aardvark;

  })(Mammal);

  Trunk = (function(_super) {

    __extends(Trunk, _super);

    function Trunk(name, length) {
      this.name = name != null ? name : 'Trunk';
      this.length = length != null ? length : 20;
    }

    return Trunk;

  })(Snout);

  Elephant = (function(_super) {

    __extends(Elephant, _super);

    function Elephant() {
      Elephant.__super__.constructor.apply(this, arguments);
      this.name = 'Elephant';
      this.body.head.bits.push(new Trunk());
      this.body.tail = new Tail();
      this.addLegs(4);
    }

    return Elephant;

  })(Mammal);

  Zoo = (function(_super) {

    __extends(Zoo, _super);

    function Zoo(name) {
      this.name = name != null ? name : 'Zoo';
      Zoo.__super__.constructor.apply(this, arguments);
      this.animals = [new Aardvark(), new Elephant()];
    }

    return Zoo;

  })(Place);

  Printer = {
    print: function(message) {
      var container;
      container = document.createElement('pre');
      container.innerHTML = message;
      return document.body.appendChild(container);
    }
  };

  App = {
    zoo: new Zoo(),
    init: function() {
      Logger.log('init', this.zoo);
      return Printer.print(JSON.stringify(this.zoo, null, 4));
    }
  };

  self.app = App;

  App.init();

}).call(this);
