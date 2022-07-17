const {createApp} = Vue

createApp({
    data() {
        return {
            message: 'Vue JS is working!',
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            picture: 'https://v2.vuejs.org/images/logo.svg'
        }
    },
    methods: {
        async getUser() {
            //get a random user from an api
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json();
            console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.gender = results[0].gender
            this.email = results[0].email
            this.picture = results[0].picture.large
        }
    }
}).mount('#app')