const app = Vue.createApp( {
    data() {
        return {
            name: "Antonio",
            age: 28,
            imageUrl: "https://picsum.photos/300/200",
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        calculateRandom() {
            return Math.random();
        }
    }
});

app.mount('#assignment');