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
  string = string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ');
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
  if (typeof path != "string"){
    return object;
  }

  if(typeof object != 'object' || object == null) {
    console.log(path + ' not exist');
    return;
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
  cptSpace = 0;
  for(var i = 1;i <= mot.length; i++) {
    if(mot.charAt(i-1) != " ") {
      codeLettre = mot.toUpperCase().charCodeAt(i-1)-65;
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
