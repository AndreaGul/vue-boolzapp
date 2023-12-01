# Boolzapp

Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

//to do
//dare una larghezza dell'80% al contenitore
//rendere la colonna sinistra no scrink
//aggiungre un margine destro alla colonna di sinistra
//alle immagini aggiungi dislay: block; cosi da rimuovere lo spazio che si rea sotto e un object-fit: cover; per sicurezza
// le icone in alto aggiungile in una lista
//l'input del cerca deve essere dislay: block; perche' presenta uno spazio superiore simile a quello delle immagini
// al container dell'input aggiungere flex frow e inpostare l'input a larghezza 100% e la sua latezza al 100%
//inpostare l'outline a 0
//quando vai sui contatti aggiungere un hover che cambia colore
//il bordo inferiore dell'ultimo contatto non ci deve essere, quindi aggiungo al conattto lo pseudo elemento last child e iinposto il border bottom a 0
//rendere la scroll bar sempre visibile con overflow-y: scroll;

// con js quando stiamo sulla chat di una persona il contatto e' active e avra un colore diverso
(active quando l'index e' uguale alla position)
