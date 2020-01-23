<template>
    <div>
        <h4>All Classes</h4>
        <li v-for="_class in classes" :key="_class.id">
            {{ _class.name }} <span><b-button size="sm" @click="enroll(_class.id)">Enroll</b-button></span>
            <br/>
        </li>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        computed: {
            ...mapState({
                classes: state => state.classes.all,
                enrollments: state => state.enrollments.all
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
        }
    };
</script>
