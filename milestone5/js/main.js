'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent',
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent',
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
            },
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received',
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
            },
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received',
            },
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received',
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent',
            },
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
            },
            {
              date: '10/01/2020 15:50:00',
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: 'sent',
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
            },
          ],
        },
      ],
      position: 0,
      addMessage: '',
      searchContact: '',
    };
  },
  methods: {
    // verifica se il messaggio e' stato inviato ricevuto
    SentOrNot(status) {
      if (status === 'sent') {
        return true;
      }
      return false;
    },
    // grazie alla posizione dei contatti nella lista a sinistra e alla variabile position posso assegnare a position il valore della posizione nell'array dei contatti cosi da poter stampare i messaggi di quel contatto
    contactMessages(index) {
      this.position = index;
      return this.position;
    },
    addingMessage(position) {
      this.contacts[position].messages.push({
        message: this.addMessage,
        status: 'sent',
      });
      setTimeout(() => {
        this.contacts[position].messages.push({
          message: 'ok',
          status: 'received',
        });
      }, 1000);

      this.addMessage = '';
    },
    searchingContacts(index) {
      if (
        //se index e minore della lunghezza dell'array
        index < this.contacts.length &&
        //e le lettere presenti nel v-model dell'input con proprieta searchContact non sono all'interno del nome in posizione index dell'array contacs
        this.contacts[index].name
          .toLowerCase()
          .includes(this.searchContact.toLowerCase()) !== true
      ) {
        // la funzione restituira' true in modo tale verificare la condizione inposta nell'html e quindi inserire la classe d-none e quindi rimuovere l'elemento dal flusso dell'html
        return true;
      } //altrimenti ritorna false e l'elemento sara' ancora visibile
      else {
        return false;
      }
    },

    deleteMessage(index) {
      this.contacts[this.position].messages.splice(index, 1);
    },
  },
}).mount('#app');
