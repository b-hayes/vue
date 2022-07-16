const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Vue JS is working!',
            firstName: 'Jim',
            lastName: 'Jones',
            gender: 'male',
            email: 'jimmy@jones.com',
            picture: 'https://image.shutterstock.com/image-photo/portrait-excited-casual-man-standing-260nw-535171852.jpg'
        }
    }
}).mount('#app')