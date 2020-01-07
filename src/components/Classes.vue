<template>
  <div>
    <h1>Classes</h1>
    <li v-for="_class in classes" :key="_class.id">
      {{ _class.name }}
      <br />
    </li>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState({
      classes: state => state.classes.all
    }),

    ...mapActions({
      getAllClasses: 'classes/getAllClasses'
    })
  },

  created() {
    this.getAllClasses;
  }
};
</script>
