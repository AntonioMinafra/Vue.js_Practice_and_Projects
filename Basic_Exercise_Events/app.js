const app = Vue.createApp({
  data() {
    return {
      name: '',
      counter: 5,
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('submitted!');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
