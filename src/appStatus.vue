<template>
<div>
	<div class="padded" v-if="activeWeek == 'numer'" @click="changeStatus">
		<h2 v-bind:class="{status_hidden: news !== 'closed'}" style="margin-top: 12px;">Чисельник <br><span>Знаменник</span></h2>
	</div>
	<div class="padded" v-if="activeWeek == 'denumer'" @click="changeStatus">
		<h2 v-bind:class="{status_hidden: news !== 'closed'}" style="margin-top: 12px;">Знаменник <br><span>Чисельник</span></h2>
	</div>
	<div class="padded" v-if="news !== 'closed'">
		<h2 style="margin-top: 2px;">Новини <span>МНАУ</span></h2>
	</div>
	<transition name="fade">
	<div class="news-button" v-if="news == 'closed'" v-on:click="news = 'opened', hideSched()">
		<img src="static/news.svg" width="26px;" style="z-index: 1;
    margin: auto;
    display: block;
    margin-top: 12px;" >
	</div>
</transition>
     	<transition name="fade">

	<div class="news-button news-button--active" v-if="news == 'opened'" v-on:click="news = 'closed', showSched()">
		<img src="static/news-active.svg" width="26px;" style="z-index: 1; margin: auto;
    display: block;
    margin-top: 12px;" >
	</div>
</transition >
<transition name="fade">
	<div class="news-wrapper container" v-show="news == 'opened'">
	<app-news></app-news>
	</div>
	</transition >
</div>
</template>

<script>
export default {
	data () {
		return {
				activeWeek: 'numer',
				weeklogic: '0',
				news: 'closed'
				}
			},
	mounted: function() {
		this.getLinkSheet(),
		this.weekNumberLogic()
		
	},
	methods: {
		hideSched: function() {
			document.querySelector('#hider').style.display="none";

		},
		showSched: function() {
			document.querySelector('#hider').style.display="block";
		},
		changeStatus: function() {
		if (this.activeWeek == 'numer') {
			this.activeWeek = 'denumer';
		} else {
			this.activeWeek = 'numer';
		}
			this.$emit('weekChanged', this.activeWeek)
		},
		getLinkSheet: function() {
	      axios.get('https://rozklad.mnau.edu.ua/db/weeklogic.json').then((data)=>{
	      this.weeklogic = data.data;
	      var myJSON = JSON.stringify(this.weeklogic);
	      localStorage.setItem("weeklogic", myJSON);
	      var text = localStorage.getItem("weeklogic");        // retrieving data
	      this.weeklogic = JSON.parse(text).weeklogic;
	  });
    },
		weekNumberLogic: function(){

		Date.prototype.getWeek = function() {
		  var date = new Date(this.getTime());
		  date.setHours(0, 0, 0, 0);
		  // Thursday in current week decides the year.
		  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
		  // January 4 is always in week 1.
		  var week1 = new Date(date.getFullYear(), 0, 4);
		  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
		  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
		}

		var currentDateTime = new Date();
		var weekNumber = currentDateTime.getWeek()

		var text = localStorage.getItem("weeklogic");        // retrieving data
	    this.weeklogic = JSON.parse(text).weeklogic;
		console.log(this.weeklogic)
		
		if (this.weeklogic == "0") {
			if (weekNumber%2 == 0) {
				this.activeWeek ='numer';
			} else {
				console.log(this.weeklogic)
				this.activeWeek ='denumer';
			}
		} else {
			if (weekNumber%2 == 0) {
				this.activeWeek ='denumer';
			} else {
				console.log(this.weeklogic)
				this.activeWeek ='numer';
			}
		}
			this.$emit('weekChanged', this.activeWeek)
		}
	}
}
</script>

<style>
	h2 {
		color: #28ac84;
		font-size: 24px;
		font-weight: 600;
	}
</style>
<style scoped>
	div.padded {
		padding: 5px 10px;
		font-weight: 600;
	}
	h2 {
		transition: all .2s ease-in-out;
	}
	h2>span {
		color: #636867;
		font-size: 18px;
		display: block;
	}
	.news-button {
	position: absolute;
    top: 17px;
    right: 5vw;
    width: 50px;
    height: 50px;
    padding-top: 0px;
	}
	.news-button::before {
content: '';
    background-color: #636867;
    opacity: .15;
    position: absolute;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    top: 3px;
    right: 3px;
    z-index: -1;
	}
	.news-wrapper {
		background-color: #fff;
		z-index: 1998;
		min-height: 100vh;
		top: 0;
	}
	.news-button--active::before {
		background-color: #28ac84;
		opacity: 0.2;
	}
	.status_hidden {
		opacity: 0!important;
		display: none;
	}

</style>