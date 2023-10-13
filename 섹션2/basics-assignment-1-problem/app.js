const app = Vue.createApp({
    data() {
        return {
            name: "AODD",
            age: "2005/01/13",
            agePlus5: 19 + 5,
            img_url: "https://redstar.moe/static/logos/main_menu_icons.png"
        }
    },
    methods: {
        random_number() {
            const randomNumber = Math.round(Math.random())
            return randomNumber
        }
    }
})
app.mount("#assignment")