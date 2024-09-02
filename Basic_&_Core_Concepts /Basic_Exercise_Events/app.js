const app = Vue.createApp({
  data() {
    return {
      name: '',
      lastName: '',
      counter: 0,
      confirmedName: '',
    };
  },
  watch: {
    counter(value){
      if (value > 50) {
        const that = this;
        setTimeout( () => {
          that.counter = 0
        }, 2000)
      }
    }
  },
  computed: {
    fullName() {
      console.log('running again');
      if ( this.name === '' && this.lastName === '' ) {
        return ''
      }
      return this.name + ' ' + this.lastName;

    }
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
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
