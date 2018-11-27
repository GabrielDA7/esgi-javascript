String.prototype.ucfirst = function () {
  return this.valueOf().charAt(0).toUpperCase() + this.valueOf().slice(1);
}

String.prototype.capitalize = function () {
  return this.valueOf()
  .toLowerCase()
  .split(' ')
  .map(string => ucfirst(string))
  .join(' ');
}

String.prototype.camelCase = function() {
  string = this.valueOf().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ');
  return capitalize(string).split(' ').join('');
}

String.prototype.snake_case = function() {
  return this.valueOf().toLowerCase().split(' ').join('_');
}

String.prototype.leet = function() {
  return this.valueOf().split('').map(l =>
    {
      switch (l) {
        case 'A':
        case 'a':
          return 4;
        case 'E':
        case 'e':
          return 3;
        case 'I':
        case 'i':
          return 1;
        case 'O':
        case 'o':
          return 0;
        case 'U':
        case 'u':
          return "(_)"
        case 'Y':
        case 'y':
          return 7;
        default:
          return l;
      }
    }
  ).join('')
}

String.prototype.verlan = function() {
  return this.valueOf().split(' ').map(word =>
    word.split('').reverse().join('')
  ).join(' ');
}

String.prototype.yoda = function() {
  return this.valueOf().split(' ').reverse().join(' ');
}

String.prototype.vig = function(clef) {
  if (typeof clef != "string"){
    return "";
  }
  motCrypte = "";
  cptSpace = 0;
  for(var i = 1;i <= this.valueOf().length; i++) {
    if(this.valueOf().charAt(i-1) != " ") {
      codeLettre = this.valueOf().toUpperCase().charCodeAt(i-1)-65;
      decalage = clef.toUpperCase().charCodeAt((i-1-cptSpace)%clef.length)-65;
      lettre = String.fromCharCode(65+(codeLettre+decalage)%26);
      motCrypte = motCrypte.concat('', lettre);
    } else {
      cptSpace++
      motCrypte = motCrypte.concat('', ' ');
    }
  }
  return motCrypte.toLowerCase();
}

Object.prototype.prop_access = function(path) {
  if (typeof path != "string"){
    return object;
  }

  if (path === null || path === '') {
    return object;
  }

  if(this.valueOf() == null) {
    console.log(path + ' not exist');
    return;
  }

  const props = path.split('.');
  let property = this.valueOf();
  props.forEach(function (prop) {
    if(!property.hasOwnProperty(prop)) {
      console.log(path + ' not exist');
      return;
    }
    property = property[prop];
  });
  return property;
}

console.log("ma chaine".ucfirst())
