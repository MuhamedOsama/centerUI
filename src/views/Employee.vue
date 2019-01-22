<template>
  <v-container>
        <v-layout justify-center align-center mt-4>
          <v-flex xs12>
            <quagga-scanner :halfSample="true" :readerSize="readerSize" :readerType="'code_39_reader'" :onDetected="detected"></quagga-scanner>
          </v-flex>
          <v-flex xs12 justify-end>
              <div v-show="true">
                <v-flex ma-1>
                <h1 >Detected</h1>
                <h1>Current Detected ID : {{currentDetection}}</h1>
                </v-flex>
                <v-flex mt-4>
                  <v-btn :disabled="!detection" @click="checkin" large class="success">Check in</v-btn>
                  <v-btn :disabled="!detection" @click="checkout" large class="blue">Check out</v-btn>
                  <v-btn :disabled="!detection" @click="clear" large class="red">Clear</v-btn>
                </v-flex>
              </div>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
import { QuaggaScanner } from 'vue-quaggajs'

  export default {
    components: {
      QuaggaScanner,
    },
    data: () => ({
      readerSize:{
        width: 640,
        height: 480
      },
      detection:false,
      currentDetection:''
    }),
    methods: {
      detected(result){
        //console.log(result)
        this.detection = true
        this.currentDetection = result.codeResult.code
        //console.log('detected', result.codeResult.code)
      },
      checkin(){
        // http request to DB
        let ID = this.currentDetection
      },
      checkout(){
        let ID = this.currentDetection
      },
      clear(){
        this.detection = false
        this.currentDetection = ''
      }
    }
  }
</script>

<style>

</style>
