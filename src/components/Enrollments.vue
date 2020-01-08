<template>
    <div>

        <h1>Enrollments go here</h1>
        <ul v-if="enrollments">
            <li v-for="enrollment in enrollments" :key="enrollment.id">
                {{ enrollment }}
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
            ...mapState ({
                enrollments: state => state.enrollments.all
            }),

            ...mapActions ({
                getEnrollments: 'enrollments/getEnrollments'
            })
        },

        created() {
            this.getEnrollments
        }
    }
</script>