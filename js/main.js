const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            firstName: 'Wess',
            lastName: 'Toft',
            showLastName: true,
            classmateNames: [
                'Sofie',
                'Mikkel',
                'Lasse',
                'Mikka', 
                'Kia', 
                'Sara'
            ]
        }
    },
    methods: {
        myMethod(){

        },
        show(){
            this.showLastName = !this.showLastName
        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
