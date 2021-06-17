<template>
    <div>
        <p>a-table test</p>

        <a-table :columns="columns" :data-source="data" :scroll="{ x: 1300 }">
        </a-table>
    </div>
</template>

<script>

    import {Table} from 'ant-design-vue';

    const columns = [
        { title: 'Full Name', width: 70, dataIndex: 'name', key: 'name', fixed: 'left' },
        { title: 'Age', width: 70, dataIndex: 'age', key: 'age', fixed: 'left' },
        { title: 'Column 1', dataIndex: 'address', key: '1' },
        { title: 'Column 2', dataIndex: 'address', key: '2' },
        { title: 'Column 3', dataIndex: 'address', key: '3' },
        { title: 'Column 4', dataIndex: 'address', key: '4' },
        { title: 'Column 5', dataIndex: 'address', key: '5' },
        { title: 'Column 6', dataIndex: 'address', key: '6' },
        { title: 'Column 7', dataIndex: 'address', key: '7' }
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 40,
            address: 'London Park',
        },
    ];

    export default {
        name: 'table-test',

        components: {
            'a-table': Table
        },

        data() {
            return {
                data,
                columns,
            };
        },
    };

</script>

<style lang='stylus' scoped>
    @import '~ant-design-vue/dist/antd.css';

</style>
