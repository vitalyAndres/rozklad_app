<template>
  <div id="app">

    <div class="container">


        <div v-show="activeTab == 'schedule'">
          <app-status v-show="activeHref !== 'null' && activeHref !== null && activeHref !== ''" v-on:weekChanged="activeWeek = $event" ></app-status>
          <div v-if="activeHref == 'null' || activeHref == null || activeHref == ''" class="ifNull">
            <img src="static/hello.svg">
            <p>Будь-ласка, оберіть вашу <br /> групу в розділі "Інше" </p>
          </div>
          <div id="hider" style="margin-top: -24px;">
        <transition name="fade">
          <app-numer v-show="activeWeek == 'numer'" v-bind:activeGroup="activeGroup" v-bind:activeHref="activeHref"></app-numer>
     	</transition>
     	<transition name="fade">
          <app-denumer v-show="activeWeek == 'denumer'" v-bind:activeGroup="activeGroup"></app-denumer>
        </transition>
        </div>
        </div>

        <div v-show="activeTab == 'ring'">
          <app-clock></app-clock>
          <div style="height: 75px;"></div>
        </div>
        <div v-show="activeTab == 'settings'">
          <app-group v-on:changeGroup="activeGroup = $event" v-on:changeHref="activeHref = $event"></app-group>
          <app-author></app-author>
          <div style="height: 75px;"></div>
        </div> 
        
    </div>
    <app-dock v-on:tabChanged="activeTab = $event"></app-dock>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeWeek: ' ',
      activeTab: 'schedule',
      activeGroup: ' ',
      activeHref: ' ',
      acHref: ' '
    }
  },
  beforeMount: function () {
    var currentHref = localStorage.getItem('currentGroup')
    this.activeHref = currentHref
    window.dataLayer = window.dataLayer || []
    function gtag () { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', 'UA-129289993-2')
  }
}
</script>

<style>
  .container {

    width: 90vw;
    margin: 0px auto;
}
    .fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
 
</style>
<style scoped>
.ifNull img {
  max-width: 350px;
  width: 85%;
  margin: 5px auto;
}
.ifNull {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  height: 90vh;
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  -o-flex-direction: column;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: #6d7173;
  font-size: 17px;
  font-weight: 600px;
}
</style>
