const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "master",
            courseGoalB: "piece",
            vueLink: "https://github.com/skchqhdpdy/udemy-vue.js"
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.round(Math.random() * 2 + 1)
            if (randomNumber >= 2) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
})
app.mount("#user-goal")