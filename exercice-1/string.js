function ucfirst(string) {
  if (typeof string != "string"){
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(string) {
  if (typeof string != "string"){
    return "";
  }
  return string
  .toLowerCase()
  .split(' ')
  .map(string => ucfirst(string))
  .join(' ');
}

function camelCase(string) {
  if (typeof string != "string"){
    return "";
  }
  return capitalize(string).split(' ').join('');
}

function snake_case(string) {
  if (typeof string != "string"){
    return "";
  }
  return string.toLowerCase().split(' ').join('_');
}

function leet(string) {
  if (typeof string != "string"){
    return "";
  }
  return string.split('').map(l =>
    {
      switch (l) {
        case 'A':
        case 'a':
          return 4;
          break;
        case 'E':
        case 'e':
          return 3;
          break;
        case 'I':
        case 'i':
          return 1;
          break;
        case 'O':
        case 'o':
          return 0;
          break;
        case 'U':
        case 'u':
          return "(_)"
          break;
        case 'Y':
        case 'y':
          return 7;
          break;
        default:
          return l;
          break;
      }
    }
  ).join('')
}

function prop_access(object, path) {
  if (typeof path != "string"){
    return "";
  }
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
  if (typeof string != "string"){
    return "";
  }
  return string.split(' ').map(word =>
    word.split('').reverse().join('')
  ).join(' ');
}

function yoda(string) {
  if (typeof string != "string"){
    return "";
  }
  return string.split(' ').reverse().join(' ');
}

function vig(mot, clef) {
  if (typeof mot != "string" || typeof clef != "string"){
    return "";
  }
  motCrypte = "";
  for(var i = 1;i < mot.length; i++) {
    codeLettre = mot.charCodeAt(i-1)-65;
    decalage = clef.charCodeAt((i-1)%clef.length)-65;
    lettre = String.fromCharCode(65+(codeLettre+decalage)%26);
    motCrypte = motCrypte.concat('', lettre);
  }
  return motCrypte;
}

console.log(vig("WIKIPEDIA", "CRYPTO"))
