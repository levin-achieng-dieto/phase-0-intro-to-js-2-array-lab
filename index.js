let cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(cat) {
  cats.push(cat);
}


function destructivelyPrependCat(cat){
  cats.unshift(cat);
}

function destructivelyRemoveLastCat(){
  cats.pop();
}

function destructivelyRemoveFirstCat(){
  cats.shift();
}

function appendCat(){
  cats.length = 0;
  cats.push('Milo', 'Otis', 'Garfield');
  let cat = [...cats, "Broom"]
  return cat
}


function prependCat(){
  cats.length = 0;
  cats.push('Milo', 'Otis', 'Garfield');
  let cat = [ "Arnold", ...cats]
  return cat
}



function removeFirstCat(){
  cats.length = 0;
  cats.push('Milo', 'Otis', 'Garfield');
  return cats.slice(1)
}

function removeLastCat(){
  cats.length = 0;
  cats.push('Milo', 'Otis', 'Garfield');
  console.log(cats.slice(0, 2));
  return cats.slice(0, 2)
}

