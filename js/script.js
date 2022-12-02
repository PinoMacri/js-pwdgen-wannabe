////console.log("JS OK")

/*
1-A) Prendi l'elemento dal DOM
1) Chiedi all'utente il suo nome
2) Chiedi all'utente il suo cognome
3) Chiedi all'utente il suo colore preferito
4) Scrivi sulla pagina nomecognomecolorepreferito21
*/

// 1-A) Prendi l'elemento dal DOM
const passwordGenerator = document.getElementById('targetPassword');
////console.log (passwordGenerator)
// 1) Chiedi all'utente il suo nome
const requestName = prompt("Qual'è il tuo nome?");
////console.log (requestName)
// 2) Chiedi all'utente il suo cognome
const requestLastName = prompt("Qual'è il tuo cognome?");
////console.log (requestLastName)
// 3) Chiedi all'utente il suo colore preferito
const requestColor = prompt("Qual'è il tuo colore preferito?");
////console.log (requestColor)
// 4) Scrivi sulla pagina nomecognomecolorepreferito21
passwordGenerator.innerText = ` ${requestName}${requestLastName}${requestColor}21 `;
//Non ho lasciato spazi su innerText perche dalla traccia "nomecognomecolorepreferito21" risulta tutto attaccato.
