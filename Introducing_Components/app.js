const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id:'manuel',
                    name: 'Manuel lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id:'juliel',
                    name: 'juliel peppa',
                    phone: '01237 8679 991',
                    email: 'juliel@localhost.com'
                },

            ],
        }
    },
});

app.component('friend-contact', {
    template:
        `
        <li>
          <h2> {{ friend.name }}</h2>
          <button @click="toggleDetails"> {{detailsAreVisible ? 'Hide' : 'Show' }}Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
        `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id:'manuel',
                name: 'Manuel lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        }
    },
})

app.mount('#app')