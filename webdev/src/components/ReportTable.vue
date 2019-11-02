<template>
<div id="report-table">
    <table>
        <thead>
            <tr>
                <th>Reports</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="report in reports" v-bind:key="report.id">
                <td>{{report.name, report.address, report.file}</td>

                <td>
                <button>Edit</button>
                <button>Delete</button>
                </td>   
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: 'report-table',
    props: {
        reports: Array,
    }
}
</script>

<style scoped>
</style>
