<template>
    <div>
        <h4>Instructors will go here</h4>
        <li v-for="instructor in instructors" :key="instructor.id">
            {{ instructor.name}}
        </li>
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