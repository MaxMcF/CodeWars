function abbrevName(name){
    let initialsArray = name.split(' ');
    let initials = [];
    for (let i = 0; i < initialsArray.length; i++){
      initials.push(initialsArray[i].charAt(0));
      }
  return initials.join('.').toUpperCase();

}
