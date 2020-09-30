export default () => ({
    data() {
        return {
            b: 'bb'
        };
    },

    mounted() {
        console.log('b -- ', this.a);
    }
});
