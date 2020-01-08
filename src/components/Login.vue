<template>
    <div>
        <b-form-row>
            <b-col/>
            <b-col>
                <h3>Login</h3>
                <b-form @submit.prevent="handleLogin">
                    <b-form-group
                            id="input-group-1"
                            label-for="input-1"
                            description="We'll never share your email with anyone else."
                    >
                        <b-form-input
                                id="input-1"
                                v-model="credentials.email"
                                type="email"
                                required
                                placeholder="Enter email"
                        />
                    </b-form-group>

                    <b-form-group id="input-group-2" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                type="password"
                                v-model="credentials.password"
                                required
                                placeholder="Enter Password"
                        />
                    </b-form-group>

                    <b-button type="submit" variant="info">Login</b-button>
                </b-form>
            </b-col
            >
            <b-col/>
        </b-form-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                credentials: {
                    email: '',
                    password: ''
                }
            };
        },

        methods: {
            handleLogin() {
                this.$store.dispatch('auth/login', this.credentials);
                this.$router.push('/courses');
            }
        },

        computed: {}
    };
</script>
