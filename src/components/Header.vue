<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-container>
                <b-navbar-brand href="#">Meet Your Tutor</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"/>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <router-link to="/my-classes" class="nav-link">My Classes</router-link>
                        <router-link to="/all-classes" class="nav-link">All Classes</router-link>
                        <router-link to="/enrollments" class="nav-link"
                        >My Bookings
                        </router-link>
                        <router-link to="/instructors" class="nav-link"
                        >Instructors
                        </router-link
                        >
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav v-if="!authenticated">
                            <router-link to="/login" class="nav-link">Login</router-link>
                            <router-link to="/signup" class="nav-link">Sign Up</router-link>
                        </b-navbar-nav>
                        <b-nav-item-dropdown right v-if="authenticated">
                            <template v-slot:button-content>
                                <em>{{user.name}}</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#" @click="handleLogout">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        computed: {
            ...mapState({
                authenticated: state => state.auth.authenticated,
                user: state => state.auth.user
            }),

            ...mapActions({
                getCurrentUser: 'auth/getCurrentUser',
            })
        },
        created() {
            this.getCurrentUser.catch(() => this.$router.push('/login'))
        },

        methods: {
            handleLogout() {
                this.$store.dispatch("auth/logOutUser").then(() => this.$router.push('/login'))
            }
        }
    }
</script>
