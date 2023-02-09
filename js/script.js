

// CHECK JS LINK
const apiUri = 'http://localhost:8080/php-dischi-json/index.php';

//? CREAZIONE APP DI VUE

const app = Vue.createApp({
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
console.log(this.disks)
app.mount('#root');