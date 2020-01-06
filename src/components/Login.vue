<template>
  <div>
    <b-form-row>
      <b-col></b-col>
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
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              type="password"
              v-model="credentials.password"
              required
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="info">Login</b-button>
        </b-form></b-col
      >
      <b-col></b-col>
    </b-form-row>
  </div>
</template>

<script>
import { login } from '../services/AuthenticationService';
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
    async handleLogin() {
      try {
        const { data } = await login(this.credentials);
        localStorage.setItem('token', data.token);
        this.$router.push('/courses');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  }
};
</script>
