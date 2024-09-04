const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      /* this.message = this.currentUserInput; */
      this.message = this.$refs.userText.value;
      /* ricordati che il refs è un oggetto con tantissime proprietà chiave:valore ovviamente a noi serve la proprietà value */
    },
  },
  /* serie di hooks che servono in generale ed esempio di come funzionano */
  beforeCreate() {
    console.log('ciao beforecreate');
  },
  created() {
    console.log('ciao created');
  },
  beforeMount() {
    console.log('beforemount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeupdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeunmount');
  },
  unmounted() {
    console.log('unmounted');
  },
});

app.mount('#app');
/* dopo 3 secondo l' app viene "smontata" */
setTimeout( () => {
  app.unmount();
}, 3000)

const app2 = Vue.createApp({
  template: `<p>{{ favoriteMeal }}</p>`,
  data() {
    return {
      favoriteMeal: 'Parmigiana'
    }
  },
});
app2.mount('#app2');
