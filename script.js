const namesArray = ["Amando","Bellona","Cato","Dabria","Equinox","Furio","Gratia","Harmon","Junius","Kasen","Lamar","Mamillius","Narciso","Odina","Pelagius","Quirinus","Rex","Sagittarius","Taurin","Ulises","Valor","Vireo","Zaniel"];
const elementArray = ["fire","water","grass","electric","psychic","metal","dark","fairy","normal","fighting","dragon"];
const hpRange = Math.floor(Math.random()* 7) * 10 + 60;

const namesPicker = () => {
    let randomDigit = Math.floor(Math.random()* 24);
    return namesArray[randomDigit];
}

const elementPicker = () => {
    let randomDigit = Math.floor(Math.random()* 12);
    return elementArray[randomDigit];
}




