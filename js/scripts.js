/*
    Attraverso l'apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

    Bonus
    Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue;

createApp ({
    data() {
        return {
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [],
        };
    },
    mounted() {
        axios.get(this.url)
            .then((res) => {
                console.log('Email generata', res.data.response);
                this.emails.push(res.data.response);
            });
        console.log(this.emails);
    },
}).mount('#app');