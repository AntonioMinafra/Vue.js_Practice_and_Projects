const app = Vue.createApp({
    data() {
        return {
            style : true,
            inputTask: '',
            listTask: []
        }
    },
    methods: {
        addTask(){
            this.listTask.push(this.inputTask);
        },
        changeStyle(){
            this.style = !this.style;
        }
    },
});

app.mount('#assignment');