<template>
<div>
  <div class="card numer" >
    <div class="toast" v-bind:class="{ active: showToast == 1 }"><p>Налаштування змінено <a href="#" v-on:click.prevent="reloadPage()">ЗБЕРЕГТИ</a> </p></div>
    <div class="padded">
      <h2 style="font-weight: 500; margin-top: 9px; text-align: center; color: rgb(80, 80, 80); font-weight: 500; font-size: 21px;">Налаштування</h2>
    </div>
    <h3 style="margin-bottom: -15px; margin-top: 25px; color: #636867; font-size: 16px; font-weight: 600; " >Оберіть групу:</h3>
    <p class="choose__tabs">
      <a v-on:click.prevent="facultyChosen = 'off'" v-bind:class="{ choose__tabs__item_active: facultyChosen == 'off' }" href="" class="choose__tabs__item ">Обліково-фінансовий</a>
      <a v-on:click.prevent="facultyChosen = 'men'" v-bind:class="{ choose__tabs__item_active: facultyChosen == 'men' }" href="" class="choose__tabs__item">Менеджменту</a>
      <a v-on:click.prevent="facultyChosen = 'energy'" v-bind:class="{ choose__tabs__item_active: facultyChosen == 'energy' }" href="" class="choose__tabs__item">Інженерно-енергетичний</a>
      <a v-on:click.prevent="facultyChosen = 'agro'" v-bind:class="{ choose__tabs__item_active: facultyChosen == 'agro' }" href="" class="choose__tabs__item">Агротехнологій</a>
      <a v-on:click.prevent="facultyChosen = 'tvppt'" v-bind:class="{ choose__tabs__item_active: facultyChosen == 'tvppt' }" href="" class="choose__tabs__item">ТВППТСБ</a>
      <a v-on:click.prevent="facultyChosen = 'tec'" v-bind:class="{ choose__tabs__item_active: facultyChosen == 'tec' }" href="" class="choose__tabs__item">ТЕК МНАУ</a>
    </p>
    <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck1">
        <label class="tab-label" for="chck1">1 курс</label>
        <div class="tab-content">
          
          <div  v-show="group.faculty == facultyChosen && group.course == '1'" v-for="(group, key) in linkSheet.linkSheet" class="ig-control" @click="groupHref = group.href; changeHref(); groupChosen = key; changeGroup(); showToast = 1; " >
            <input type="radio" v-bind:id="key" @click="" class="ig-control__radio" v-bind:value="group.href" v-model="groupHref">
            <label v-bind:for="key">{{ group.group }}</label>
          </div>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck2">
        <label class="tab-label" for="chck2">2 курс</label>
        <div class="tab-content">
          
          <div  v-show="group.faculty == facultyChosen && group.course == '2'" v-for="(group, key) in linkSheet.linkSheet" class="ig-control" @click="groupHref = group.href; changeHref(); groupChosen = key; changeGroup(); showToast = 1; " >
            <input type="radio" v-bind:id="key" @click="" class="ig-control__radio" v-bind:value="group.href" v-model="groupHref">
            <label v-bind:for="key">{{ group.group }}</label>
          </div>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck3">
        <label class="tab-label" for="chck3">3 курс</label>
        <div class="tab-content">
          
          <div  v-show="group.faculty == facultyChosen && group.course == '3'" v-for="(group, key) in linkSheet.linkSheet" class="ig-control" @click="groupHref = group.href; changeHref(); groupChosen = key; changeGroup(); showToast = 1; " >
            <input type="radio" v-bind:id="key" @click="" class="ig-control__radio" v-bind:value="group.href" v-model="groupHref">
            <label v-bind:for="key">{{ group.group }}</label>
          </div>
        </div>
      </div>
      <div class="tab" v-show="facultyChosen !== 'tec'">
        <input type="checkbox" id="chck4">
        <label class="tab-label" for="chck4">4 курс</label>
        <div class="tab-content">
          
          <div  v-show="group.faculty == facultyChosen && group.course == '4'" v-for="(group, key) in linkSheet.linkSheet" class="ig-control" @click="groupHref = group.href; changeHref(); groupChosen = key; changeGroup(); showToast = 1; " >
            <input type="radio" v-bind:id="key" @click="" class="ig-control__radio" v-bind:value="group.href" v-model="groupHref">
            <label v-bind:for="key">{{ group.group }}</label>
          </div>
        </div>
      </div>
      <div class="tab" v-show="facultyChosen !== 'tec'">
        <input type="checkbox" id="chck5">
        <label class="tab-label" for="chck5">5 курс</label>
        <div class="tab-content">
          
          <div  v-show="group.faculty == facultyChosen && group.course == '5'" v-for="(group, key) in linkSheet.linkSheet" class="ig-control" @click="groupHref = group.href; changeHref(); groupChosen = key; changeGroup(); showToast = 1; " >
            <input type="radio" v-bind:id="key" @click="" class="ig-control__radio" v-bind:value="group.href" v-model="groupHref">
            <label v-bind:for="key">{{ group.group }}</label>
          </div>
        </div>
      </div>
      <div class="tab" style="border-radius: 0 0 5px 5px; border: none;" v-show="facultyChosen !== 'tec'">
        <input type="checkbox" id="chck6">
        <label class="tab-label" for="chck6">6 курc</label>
        <div class="tab-content">
          <div  v-if="group.faculty == facultyChosen && group.course == '6'" v-for="(group, key) in linkSheet.linkSheet" class="ig-control" @click="groupHref = group.href; changeHref(); groupChosen = key; changeGroup(); showToast = 1; " >
            <input type="radio" v-bind:id="key" @click="" class="ig-control__radio" v-bind:value="group.href" v-model="groupHref">
            <label v-bind:for="key">{{ group.group }}</label>
          </div>
        </div>
      </div>
    </div>
    <!-- <div  v-show="group.faculty == facultyChosen" v-for="(group, key) in linkSheet.linkSheet" class="ig-control" @click="groupHref = group.href; changeHref();" >
        <input type="radio" v-bind:id="key" @click="groupChosen = key; changeGroup(); showToast = 1; " class="ig-control__radio" v-bind:value="group.href" v-model="groupHref">
        <label v-bind:for="key">{{ group.group }}</label>
    </div> -->
  </div>

<div class="card">
          <h3 style="margin-top: -5px; color: rgb(99, 104, 103); font-size: 16px; font-weight: 600;">Тема оформлення</h3>
          <div class="ig-control" @click="themeChosen = 'light'; changeTheme();">
            <input type="radio" @click="" class="ig-control__radio" value="light"  v-model="themeChosen">
            <label v-bind:for="key">Світла</label>
          </div>
          <div class="ig-control" @click="themeChosen = 'dark'; changeTheme();" style="margin-bottom: 10px;">
            <input type="radio" @click="" class="ig-control__radio" value="dark" v-model="themeChosen">
            <label v-bind:for="key">Темна</label>
          </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      linkSheet: {},
      groupChosen: ' ',
      groupHref: ' ',
      showToast: '0',
      facultyChosen: 'off',
      themeChosen: 'light'
      }
    },
  watch: {
    groupHref: function(newVal, oldVal) { // watch it
    localStorage.setItem("currentGroup", this.groupHref);
  },
  themeChosen: function(newVal, oldVal) { // watch it
    localStorage.setItem("currentTheme", this.themeChosen);
  }
},
  beforeMount: function() {
    var text = localStorage.getItem("linkSheet");
    this.groupHref = localStorage.getItem("currentGroup");        // retrieving data
    this.themeChosen = localStorage.getItem('currentTheme');


  },
  mounted: function() {
      this.getLinkSheet()
    },
  methods: {
    changeTheme: function() {
      if(this.themeChosen=='dark') {
        document.getElementsByTagName('html')[0].classList.add("dark");
      } else {
        document.getElementsByTagName('html')[0].classList.remove("dark");
      }
    },
    reloadPage: function(){
      location.reload();
    },
    getLinkSheet: function() {
      axios.get('https://rozklad.mnau.edu.ua/db/link-sheet.json').then((data)=>{
      this.linkSheet = data.data;
      var myJSON = JSON.stringify(this.linkSheet);
      localStorage.setItem("linkSheet", myJSON);
      var text = localStorage.getItem("linkSheet");        // retrieving data
      this.linkSheet = JSON.parse(text);
  });
    },
    changeGroup: function() {
      this.$emit('changeGroup', this.groupChosen )
    },
    changeHref: function() {
      this.$emit('changeHref', this.groupHref )
    }
  }
}
</script>
<style scoped>
body {
color: #505050;
background: #ecf0f1;
padding: 0 1em 1em;
}
input {
position: absolute;
opacity: 0;
z-index: -1;
}
/* Accordion styles */
.tabs {
border-radius: 5px;
overflow: hidden;
}
.tab {
width: 100%;
color: #505050;
overflow: hidden;
border-bottom: solid 1px #e9e9e7;
-webkit-tap-highlight-color: transparent;
}
.tab-label {
display: flex;
justify-content: space-between;
padding: 1em 0.5em;
background: white;
font-weight: 600;
cursor: pointer;
/* Icon */
}
.tab-label:hover {
background: rgba(99, 104, 103, 0.01);
}
.tab-label::after {
content: url(https://rozklad.mnau.edu.ua/app/static/arrow.svg);
width: 21px;
height: 21px;
text-align: center;
transform-origin: center center;
transition: all .35s;
}
.tab-content {
max-height: 0;
padding: 0 1em;
color: #505050;
background: white;
transition: all .35s;
}
.tab-close {
display: flex;
justify-content: flex-end;
padding: 1em;
font-size: 0.75em;
background: rgba(99, 104, 103, 0.01);
cursor: pointer;
}
.tab-close:hover {
background: rgba(99, 104, 103, 0.01);
}
input:checked + .tab-label {
background: rgba(99, 104, 103, 0.01);
}
input:checked + .tab-label::after {
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
}
input:checked ~ .tab-content {
max-height: 100vh;
padding: 1em;
}
</style>
<style >
  .card {
    padding: 5px 10px;
    width: 100%;
  margin: 10px auto 15px;
  border-bottom: solid 0.5px #e9e9e7;
box-sizing: border-box;
font-weight: 600;
  }
  h3.link {
    margin: 10px 0;
  }
  h3.link {
    color: #28ac84;
    font-weight: 600;
    font-size: 16px;
  }
  .wrap {
  }
  .wrap>p {
    color: #000201;
    font-size: 16px;
    margin: 0;
    min-width: 70px;
    font-weight: 600;
  }
  .card p.name {
    color: #636867;
    font-size: 13px;
    margin: 3px 0 15px;
    font-weight: 500;
  }
  .card ul li {
    color: #636867;
    font-size: 14px;
  }
  .card ul {
    padding-left: 17px;
  }
  .cab {
    text-align: right;
    color: #636867 !important;
    font-size: 14px !important;
    font-weight: 600;
  }
  .cab::before {
    content: " ";
    color: ;
  }
</style>
<style scoped>
  html {
box-sizing: border-box;
-webkit-tap-highlight-color: transparent;
}
.choose__tabs {
  margin-bottom: 0px;
  display: flex;
  flex-direction: row;
  overflow-x: overlay;
  border-bottom: solid 1px #e9e9e7;
}
.choose__tabs__item {
  display: block;
  padding-top: 12px;
  font-weight: 600;
flex-shrink: 0;
  color: rgb(99, 104, 103);
  word-break: keep-all;
  text-decoration: none;
  margin-right: 15px;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
}
.choose__tabs__item_active {
  color: #28ac84;
}
.choose__tabs__item_active::after {
content: '';
display: block;
margin: 12px auto 0;
background-color: #28ac84;
border-radius: 5px 5px 0 0;
width: 85%;
height: 2px;
}
*,
*:before,
*:after {
/* box-sizing: content-box;*/
}
body {
font-size: 16px;
}
/*.toast {
position: fixed;
bottom: 0;
left: 0;
right: 0;
width: 100vw;
height: 52px;
background-color: #323232;
padding: 0px 23px;
color: white;
z-index: 999;
box-sizing: border-box;
transition: all 0.4s ease-in-out;
transform: translateY(52px);
}*/
.toast {
position: fixed;
bottom: 23px;
left: 0;
right: 0;
width: 100vw;
height: 52px;
/* background-color: #323232; */
padding: 0px 10px;
color: white;
z-index: 999;
-webkit-box-sizing: border-box;
box-sizing: border-box;
-webkit-transition: all 0.4s ease-in-out;
transition: all 0.4s ease-in-out;
-webkit-transform: translateY(62px);
transform: translateY(62px);
}
.toast p {
  background-color: #323232;
display: block;
padding: 17px 20px;
border-radius: 5px;
font-weight: 500!important;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.toast>p>a {
position: absolute;
right: 36px;
text-decoration: none;
color: #28ac84;
font-weight: 600;
-webkit-tap-highlight-color: transparent;
}
.active {
  transform: translateY(-4px);
}
/*.toast>p>a{
  position: absolute;
right: 25px;
text-decoration: none;
color: #28ac84;
font-weight: 600;
}*/
.ig-control {
padding: 5px 0;
-webkit-tap-highlight-color: transparent;
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
.ig-control__radio:not(:checked),
.ig-control__radio:checked {
opacity: 0;
position: absolute;
/* margin: 0; */
width: 85%;
height: 22px;
margin-top: -3px;
}
.ig-control__radio ~ label {
display: inline-block;
position: relative;
cursor: pointer;
height: 20px;
line-height: 20px;
font-size: 16px;
font-weight: 600;
color: #484848;
padding-left: 26px;
}
.ig-control__radio ~ label:before,
.ig-control__radio ~ label:after {
position: absolute;
content: '';
width: 15px;
height: 15px;
left: 0;
border: 2px solid transparent;
border-radius: 50% 50%;
}
.ig-control__radio ~ label:before {
backface-visibility: hidden;
transform: translateZ(0);
transition: all .2s ease-in;
}
.ig-control__radio:not(:checked) ~ label:before {
transform: scale(0);
}
.ig-control__radio:not(:checked) ~ label:after {
border: 2px solid #757575;
}
.ig-control__radio:checked ~ label:before {
border: 2px solid #0375BE;
background-color: #0375BE;
transform: scale(0.5);
}
.ig-control__radio:checked ~ label:after {
border: 2px solid #0375BE;
}
.ig-control__radio:disabled ~ label {
pointer-events: none;
color: #D1D1D1;
}
.ig-control__radio:disabled:not(:checked) ~ label:after {
border: 2px solid #D1D1D1;
}
.ig-control__radio:disabled:checked ~ label:before {
background-color: #D1D1D1;
border: 2px solid #D1D1D1;
}
.ig-control__radio:disabled:checked ~ label:after {
border: 2px solid #D1D1D1;
}
</style>