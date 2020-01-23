<template>
    <div>
        <h4>My Classes</h4>
        <li v-for="_class in userClasses" :key="_class.id">
            {{ _class.name }}
            <br/>
        </li>
    </div>

</template>

<script>
    import {mapState} from "vuex";

    export default {
        computed: {
            ...mapState({
                user: state => state.auth.user,
                userClasses: state => state.classes.userClasses
            })
        },

        mounted() {
            this.user ? this.$store.dispatch('classes/getUserClasses', this.user.id) : false
        }
    }
</script>