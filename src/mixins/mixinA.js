export default () => ({
    data() {
        return {
            a: 'aaa'
        };
    },

    mounted() {
        console.log('a -- ', this.b);
    }
});
