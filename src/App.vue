<template>
  <div id="app">

    <div class="container">


        <div v-show="activeTab == 'schedule'">
          <app-status v-show="activeHref !== 'null' && activeHref !== null && activeHref !== ''" v-on:weekChanged="activeWeek = $event" ></app-status>
          <div v-if="activeHref == 'null' || activeHref == null || activeHref == ''" class="ifNull" style="margin-bottom: 120px;">
            <img src="static/hello.svg" style="margin-top: 10vh;">
            <p style="font-weight: 600; margin-bottom: 40px; font-size: 14px;"> </p>
            <div class="tip_card" style="background: linear-gradient(to top right,#28ac84 0,#26979e); color: white; border: solid 1px #28ac84;" @click="activeTab = 'settings'; changeTab();">
              <h4 style="color: white;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="transform: translateY(3px); padding-right: 2px;"><path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
                З чого розпочнемо?
              </h4>
              <p>Будь-ласка, оберіть вашу групу в розділі "Налаштування"</p>
            </div>
            <div class="tip_card">
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="transform: translateY(3px); padding-right: 2px;"><path fill="#28ac84" d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
                Скільки часу до кінця пари?
              </h4>
              <p>Додаток візуально покаже, скільки часу залишилось до кінця заняття</p>
            </div>
            <div class="tip_card">
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="transform: translateY(3px); padding-right: 2px;"><path fill="#28ac84" d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z"/></svg>
                Які завтра пари?
              </h4>
              <p>Додаток відповість на це запитання. База данних розкладу знаходиться на сервері університету, тому для внесення змін до розкладу не треба оновлювати додаток</p>
            </div>
            <div class="tip_card">
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="transform: translateY(3px); padding-right: 2px;"><path fill="#28ac84" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h5v5H7z"/></svg>
              Зараз знаменник чи чисельник?
            </h4>
              <p>Додаток автоматично визначає тип тижня, та показує потрібний розклад</p>
            </div>
            <div class="tip_card">
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="transform: translateY(3px); padding-right: 2px;"><circle fill="#28ac84" cx="6.18" cy="17.82" r="2.18"/><path fill="#28ac84" d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/></svg>
              Що нового в університеті?
            </h4>
              <p>В додаток інтегровано стрічку новин</p>
            </div>
            
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
    var currentTheme = localStorage.getItem('currentTheme')
    this.activeHref = currentHref
    window.dataLayer = window.dataLayer || []
    function gtag () { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', 'UA-129289993-2')

    if(currentTheme =='dark') {
        document.getElementsByTagName('html')[0].classList.add("dark");
        StatusBar.backgroundColorByHexString("#1d1d1d");
      } else {
        document.getElementsByTagName('html')[0].classList.remove("dark");
        StatusBar.backgroundColorByHexString("#ffffff");
      }
  }
}
</script>

<style>
  .container {
    width: 90vw;
    margin: 0px auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease-in-out;
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
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  -o-flex-direction: column;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: #292e31;
  font-size: 17px;
  font-weight: 600;
}
.tip_card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.13);
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  text-align: left;
}
.tip_card h4 {
  margin: 4px 0 6px;
  color: #292e31;
  font-size: 16px;
}
.tip_card p {
  margin: 0px 0 8px;
  font-size: 14px;
}
</style>

<style>
  body {
    margin: 0px!important;
}
.dark {
    background-color: #1d1d1d;
}
.dark h2>span {
    color: #e8e8e8!important;
}
.dark .wrap>p {
    color: #e8e8e8!important;
}
.dark .card {
    border-bottom: .5px solid #272727!important;
}
.dark .card p.name {
    color: #bfbfbf!important;
}
.dark .card .cab {
    color: #bfbfbf!important;
}
.dark .tommorow p.name {
    color: #fff!important;
}
.dark .news-wrapper {
    background-color: #1d1d1d!important;
}
.dark .news-wrapper span {
    color: #bfbfbf!important;
}
.dark a.news__link span:first-child {
    color: white!important;
}
.dark .clock {
    color: #e8e8e8!important;
}
.dark .ring p {
    color: #e8e8e8!important;
}
.dark .timer svg path {
    fill: #e8e8e8;
}
.dark .ring p span {
    color: #bfbfbf!important
}
.dark .progressBar {
    background-color: #464646!important;
}
.dark .card h2 {
    color: #e8e8e8!important;
}
.dark h3 {
   color: #e8e8e8!important; 
}
.dark .choose__tabs__item {
   color: #e8e8e8!important; 
}
.dark .choose__tabs__item_active {
    color: #28ac84!important;
}
.dark .card p {
    color: #e8e8e8!important;
}
.dark .card p span{
    color: #bfbfbf!important;
}
.dark .tommorow .cab {
    color: #e8e8e8!important;
}
.dark .card div svg, .dark .card a svg {
    filter: brightness(2);
}
.dark .tabs, .dark .tab-content, .dark label {
   background-color: #1d1d1d!important;
   color: #e8e8e8!important;
}
.dark .tab, .dark .choose__tabs {
    border-bottom: 1px solid #272727!important;
}
.dark #dockBar {
    background-color: #232323!important;
}
.dark .icon p {
    color: #bfbfbf!important;
}
.dark .icon svg {
    fill: #bfbfbf!important;
}
.dark .tabActive p {
    color: #89b2d8!important;
}
.dark .tabActive svg {
    fill: #89b2d8!important;
}
.dark .tab-label:after {
    display: none;
}
.toast p {
    background-color: #1d1d1d!important;
}
.dark .tip_card h4 {
  color: #e8e8e8!important;
}
.dark .tip_card p {
  color: #e8e8e8!important;
}
.dark .tip_card {
  border: 1px solid rgba(255, 255, 255, 0.13);
}
</style>