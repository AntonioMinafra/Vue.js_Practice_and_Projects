const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            paragraphIsVisible: true,
            inputBackgroundColor: ''
        }
    },
    computed: {
        paraClasses(){
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visibile: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible
            }
        }
    },
    methods: {
        changeVisual(){
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    },
});

app.mount('#assignment');