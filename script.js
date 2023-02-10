// CHECK JS LINK
const apiUri = 'http://localhost:8080/php-dischi-json/api/';

//? CREAZIONE APP DI VUE

const app = Vue.createApp({
    name: 'AppDisks',
    data() {
        return {
            disks: [],
            selectedDisk: [],
            genres: ['Rock', 'Pop', 'Jazz', 'Metal'],
            selectedGenre: '',
            isClick: false
        }
    },
    created() {
        this.fetchApi(apiUri, 'disks');
    },
    methods: {
        clickToCard(array) {
            this.isClick = true;
            this.selectedDisk = array;
        },
        infoToggle() {
            this.isClick = false;
        },
        fetchApi(endpoint, target) {
            axios.get(endpoint).then(res => {
                this[target] = res.data;
            })
        },
        filterDisks() {
            let endpoint = apiUri;
            if (this.selectedGenre) endpoint += `?genre=${this.selectedGenre}`;
            this.fetchApi(endpoint, 'disks')

        }
    }
});

app.mount('#root');