const app = new Vue({
    el: '#app',
    data: {
        userEmail: ''
    },
    mounted() {

        for (let index = 0; index < 10; index++) {

            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(resp => {
                    console.log(resp.data.response);
                    this.userEmail = (resp.data.response)
                })

        }
    }
})