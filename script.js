// CHECK JS LINK
const apiUri = 'http://localhost:8080/php-dischi-json/api/';

//? CREAZIONE APP DI VUE

const app = Vue.createApp({
    name: 'AppDisks',
    data() {
        return {
            disks: [],
            selectedDisk: [],
            isClick: false
        }
    },
    mounted() {
        axios.get(apiUri).then(res => {
            this.disks = res.data;
        })
    },
    methods: {
        clickToCard(array) {
            this.isClick = true;
            this.selectedDisk = array;
        },
        infoToggle() {
            this.isClick = false;
        }
    }
});

app.mount('#root');