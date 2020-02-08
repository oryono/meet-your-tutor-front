<template>
    <div>
        <loading :active.sync="loading"
                 :can-cancel="true"
                 :is-full-page="true"></loading>
        <div v-if="!loading">
            <div v-if="classes.length > 0">
                <h4>All Classes</h4>
                <li v-for="_class in classes" :key="_class.id">
                    {{ _class.name }} <span><b-button size="sm" @click="enroll(_class.id)">Enroll</b-button></span>
                    <br/>
                </li>
            </div>

            <div v-else>
                Nothing here
            </div>

        </div>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    // Import component
    import Loading from 'vue-loading-overlay';
    export default {
        computed: {
            ...mapState({
                classes: state => state.classes.all,
                enrollments: state => state.enrollments.all,
                loading: state => state.classes.loading
            }),

            ...mapActions({
                getAllClasses: 'classes/getAllClasses'
            }),

            classesNotEnrolled: function () {
                return this.classes.filter(function (_class) {
                    return this.enrolledClassIds().includes(_class.id)
                })
            },

            enrolledClassIds: function () {
                return this.enrollments.map(function (enrollment) {
                    return enrollment.class['id']
                })
            }
        },

        created() {
            this.$store.dispatch('classes/init');
            this.getAllClasses;
        },

        methods: {
            enroll(classId) {
                this.$store.dispatch('enrollments/enroll', classId)
                    .then(() => this.$router.push('/enrollments'))
                    .catch((error) => {
                        // eslint-disable-next-line no-console
                        console.log(error.response);
                        this.$vToastify.error(error.response.data.errors.email_class_constraint[0])
                    })
            }
        },

        components: {
            Loading
        }
    };
</script>
