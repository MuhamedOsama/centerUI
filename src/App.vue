<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="" class="pa-3">
          <v-list-tile-action  >
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Employee</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" class="pa-3">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Shared Space</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" class="pa-3">
          <v-list-tile-action>
            <v-icon>phone</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Members</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout justify-center align-center>
          <v-flex xs12>
            <quagga-scanner  :readerSize="readerSize" :readerType="'code_39_reader'" :onDetected="detected"></quagga-scanner>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { QuaggaScanner } from 'vue-quaggajs'

  export default {
    components: {
      QuaggaScanner,
    },
    data: () => ({
      drawer: false,
      readerSize:{
        width: 640,
        height: 480
      },
      detecteds: []
    }),
    methods: {
      detected(result){
        //console.log(result)
        console.log('detected', result.codeResult.code)
      },
    },
    props: {
      source: String
    }
  }
</script>