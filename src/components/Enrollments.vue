<template>
    <div>
        <ul v-if="enrollments.length > 0">
            <h4>All Enrollments</h4>
            <li v-for="enrollment in enrollments" :key="enrollment.id">
                {{ enrollment.class.name }}
            </li>
        </ul>
        <div v-else>Nothing here</div>
    </div>

</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {}
        },

        computed: {
            ...mapState({
                enrollments: state => state.enrollments.all
            }),

            ...mapActions({
                getEnrollments: 'enrollments/getEnrollments'
            })
        },

        created() {
            this.getEnrollments
        }
    }
</script>