<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile to="/" @click="" class="pa-3">
          <v-list-tile-action  >
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Employee</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/sharedSpace" @click="" class="pa-3">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Shared Space</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/Members" @click="" class="pa-3">
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
      <v-slide-y-transition mode="out-in">
      <router-view></router-view>
      </v-slide-y-transition>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
setInterval(function(){ console.log('Hello') }, 300)
</script>

<script>
  export default {
    data: () => ({
      drawer: false,
    }),
    methods: {

    },
    props: {
      source: String
    }
  }
</script>