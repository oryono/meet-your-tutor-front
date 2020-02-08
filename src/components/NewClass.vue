<template>
    <div>
        <b-form-row>
            <b-col/>
            <b-col>
                <h3>Create a class</h3>
                <b-form @submit.prevent="submitClass">
                    <b-form-group
                            id="input-group-1"
                            label-for="input-1"
                    >
                        <b-form-input
                                v-model="name"
                                type="email"
                                required
                                placeholder="Enter name"
                        />
                    </b-form-group>

                    <b-form-group id="input-group-2" label-for="input-2">
                        <b-form-textarea
                                type="text"
                                v-model="description"
                                required
                                placeholder="Description"
                        />
                    </b-form-group>

                    <b-form-group id="input-group-3" label-for="input-3">
                        <b-form-input
                                type="date"
                                v-model="start_date"
                                required
                                placeholder="Start Date"
                        >

                        </b-form-input>

                        <datetime v-model="start_date">

                        </datetime>
                    </b-form-group>

<!--                    <b-form-group id="input-group-5" label-for="input-5">-->
<!--                        <b-form-input>-->
<!--                            <datetime v-model="end_date"></datetime>-->
<!--                        </b-form-input>-->
<!--                    </b-form-group>-->

                    <b-form-group id="input-group-6" label-for="input-6">
                        <vue-google-autocomplete
                                id="map"
                                classname="form-control"
                                placeholder="Start typing"
                                v-on:placechanged="getAddressData"
                                :country="['ug', 'ke']"
                        >
                        </vue-google-autocomplete>
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
    import VueGoogleAutocomplete from 'vue-google-autocomplete'
    import {Datetime} from 'vue-datetime';

    export default {
        data() {
            return {
                name: '',
                category_id: '',
                description: '',
                start_date: '',
                end_date: '',
                location: '',
                course_banner: ''
            }
        },

        components: {
            VueGoogleAutocomplete,
            Datetime
        },
        methods: {
            // eslint-disable-next-line no-unused-vars
            getAddressData: function (addressData, placeResultData, id) {
                this.location = addressData;
            }
        }
    }
</script>