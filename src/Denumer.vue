<template>
<div style="margin-bottom: 100px;">
	<div class="card numer" v-for="(day, key) in db.sched.denumer" v-bind:class="{ tommorow : today == key}" >
		<h3 class="link" v-if="key == 'monday'">Понеділок</h3> 
		<h3 class="link" v-if="key == 'tuesday'">Вівторок</h3> 
		<h3 class="link" v-if="key == 'wednesday'">Середа</h3> 
		<h3 class="link" v-if="key == 'thursday'">Четвер</h3> 
		<h3 class="link" v-if="key == 'friday'">П'ятниця</h3> 


		<div  v-for="item in day" >
			<div class="wrap" style="display: flex; justify-content: space-between;">
			<p>{{ item.num + '. ' +item.lesson }}</p> 
			<p class="cab">{{ item.room }}</p>
			</div>
			<p class="name">{{ item.teacher }}</p>
		</div>	
	</div>
	<p style="text-align: center; display: flex;
    text-align: center; justify-content: center;
    align-items: center; flex-wrap: wrap; color: #636867;"><svg style="padding: 5px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="#636867" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> {{ 'Версія розкладу від: ' + db.dataBaseVer }}</p>	
</div>
</template>

<script>
export default {
	props: ['activeGroup', 'activeHref'],
	data () {
		return {
			db: {},
			today: '',
			acHref: ''
			}
		},

	mounted: function() {
		this.getDataBase()
		this.acHref = localStorage.getItem("currentGroup");
		var text = localStorage.getItem("db");       
		this.db = JSON.parse(text);
		this.getDataBase()

	},

	watch:  { 
      	activeHref: function(newVal, oldVal) { // watch it
      		this.acHref = this.activeHref;

      		this.getDataBase()
      		}
        },

	mounted: function() {
			this.getDataBase(),
			this.timeLogic()
		},
	methods: {

		timeLogic: function() {
			var date = new Date();
			var dayOfWeek = date.getDay()
				switch (dayOfWeek) {
					case 1:
					    this.today = 'monday';
					    break;
					case 2:
					    this.today = 'tuesday';
					    break;
					case 3:
					    this.today = 'wednesday';
					    break;
					case 4:
					    this.today = 'thursday';
					    break;
					case 5: 
						this.today = 'friday';
						break;
					 default:
					    this.today = '';
				}
		},
		getDataBase: function() {
			this.activeHref = localStorage.getItem("currentGroup");        // retrieving data 
			this.db = 0
			axios.get(this.activeHref).then((data)=>{    
            this.db = data.data;
            var myJSON = JSON.stringify(this.db); 
            localStorage.setItem("db", myJSON);   
                // storing data
			var text = localStorage.getItem("db");        // retrieving data 
			this.db = JSON.parse(text);
			           
        });
		}
	}
}
</script>

<style>
	.tommorow {
	background-color: #28ac84;
	background: linear-gradient(to top right, #28AC84 0%, #26979E 100%);			
	border-radius: 5px;
	color: white !important;
		}
		.tommorow h3 {
			color: white !important;
		}
		.tommorow .wrap>p {
			color: white !important;
		}
		.tommorow .name {
			color: white !important;
			opacity: 0.85;
		}

</style>

<style scoped>
	.card {
		padding: 5px 10px;
		width: 100%;
	    margin: 10px auto 15px;
	    border-bottom: solid 0.5px #e9e9e7;
        box-sizing: border-box;
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
		font-weight: 600;

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