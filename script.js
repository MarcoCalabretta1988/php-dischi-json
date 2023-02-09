// CHECK JS LINK
const apiUri = 'http://localhost:8080/php-dischi-json/api/';

//? CREAZIONE APP DI VUE

const app = Vue.createApp({
    name: 'AppDisks',
    data() {
        return {
            disks: [],
        }
    },
    mounted() {
        axios.get(apiUri).then(res => {
            this.disks = res.data;
        })
    }
});

app.mount('#root');