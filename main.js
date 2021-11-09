const app = new Vue({
    el: '#app',
    data: {
        li: 0,
        users: [

        ]
    },
    mounted() {

        for (let index = 0; index < 10; index++) {

            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(resp => {
                    setTimeout(1000)
                    console.log(resp.data.response);
                    this.users.push(resp.data.response)
                })

        }
    }
})