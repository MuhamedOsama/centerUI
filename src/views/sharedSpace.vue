<template>
    <v-container>
        <v-layout justify-center align-center fill-height>
            <v-flex xs6 mt-5>
                <v-form v-model="valid">
                    <v-text-field
                        v-model="sharedSpaceName"
                        outline
                        :rules="nameRules"
                        label="Shared space name"
                        placeholder="R8.."
                        required
                        ></v-text-field>
                        <v-text-field
                        v-model="price"
                        :rules="priceRules"
                        outline
                        label="Shared space name"
                        placeholder="300.."
                        required
                        ></v-text-field>
                        <v-btn large red @click="submit" :disabled="!valid">Submit</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
        <v-layout justify-center align-center fill-height>
             <v-flex xs6 mt-5>
                <v-sheet class="pink">
                    <h1>Name: {{sharedSpaceName}}</h1>
                    <h1>Paid: {{price}} L.E</h1>
                </v-sheet>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        valid:true,
        nameRules: [v => !!v || 'Name is required'],
        priceRules: [v=> !!v && !isNaN(v) || 'Must be a number'],
        sharedSpaceName:'',
        price: null
    }),
    methods: {

    }
}
</script>

<style>

</style>
