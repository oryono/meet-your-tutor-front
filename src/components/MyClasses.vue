<template>
    <div>
        <div v-if="userClasses.length > 0">
            <h4>My Classes</h4>
            <li v-for="_class in userClasses" :key="_class.id">
                {{ _class.name }}
                <br/>
            </li>
        </div>

        <div v-else>
            <p>Nothing here</p>
            <router-link to="/classes/create" class="nav-link">Create a class</router-link>
        </div>

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