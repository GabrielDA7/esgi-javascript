function ucfirst(string) {
  isNotString(string);

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(string) {
  isNotString(string);

  return string
  .toLowerCase()
  .split(' ')
  .map(string => ucfirst(string))
  .join(' ');
}

function camelCase(string) {
  isNotString(string);
  string = string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  return capitalize(string).split(' ').join('');
}

function snake_case(string) {
  isNotString(string);

  return string.toLowerCase().split(' ').join('_');
}

function leet(string) {
  isNotString(string);

  return string.split('').map(l =>
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

function prop_access(object, path) {
  isNotString(string);

  if(typeof object != 'object') {
    console.log('Need Object at first parameter');
  }
  if (path === null || path === '') {
    return object;
  }

  const props = path.split('.');
  let property = object;
  props.forEach(function (prop) {
    if(!property.hasOwnProperty(prop)) {
      console.log(path + ' not exist');
      return;
    }
    property = property[prop];
  });
  return property;
}

function verlan(string) {
  isNotString(string);
  return string.split(' ').map(word =>
    word.split('').reverse().join('')
  ).join(' ');
}

function yoda(string) {
  isNotString(string);
  return string.split(' ').reverse().join(' ');
}

function vig(mot, clef) {
  if (typeof mot != "string" || typeof clef != "string"){
    return "";
  }
  motCrypte = "";
  for(var i = 0;i <= mot.length; i++) {
    codeLettre = mot.toUpperCase().charCodeAt(i-1)-65;
    decalage = clef.toUpperCase().charCodeAt((i-1)%clef.length)-65;
    lettre = String.fromCharCode(65+(codeLettre+decalage)%26);
    motCrypte = motCrypte.concat('', lettre);
  }
  return motCrypte;
}

function isNotString(input) {
  if (typeof input != "string"){
    return "";
  }
}

console.log(vig("un mot"))
