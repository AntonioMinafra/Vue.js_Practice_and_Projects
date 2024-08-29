const app = Vue.createApp({
    data() {
        return {
            number : 0,
        }
    },
    /* qui invece di mettere direttamente il number nell html ho gestito nel computed dinamicamente il cambio del valore e quindi del risultato */
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet';
            }else if (this.number === 37){
                return this.number;
            }else {
                return 'too much!';
            }
        }
    },
    methods: {
        addFive(num){
            this.number = this.number + num
        },
        addOne(num){
            this.number = this.number + num
        }
    },
    /* nel watch dando lo stesso nome del computer e quindi della funzione sopra messa, vue sa che mi riferisco a quello ed ho settato un timeout ogni 5 secondi al cambio del risultato del return */
    watch: {
        result(){
            const that = this;
            setTimeout( () => {
                that.number = 0;
            }, 5000)
        }
    }
})

app.mount('#assignment');