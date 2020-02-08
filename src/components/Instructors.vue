<template>
    <div>
        <div v-if="instructors.length > 0">
            <h4>All Instructors</h4>
            <li v-for="instructor in instructors" :key="instructor.id">
                {{ instructor.name}}
            </li>
        </div>

        <div v-else>Nothing here. <span></span></div>

    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        computed: {
            ...mapState({
                instructors: state => state.instructors.all
            })
        },

        created() {
            this.$store.dispatch('instructors/getInstructors')
        }
    }

</script>