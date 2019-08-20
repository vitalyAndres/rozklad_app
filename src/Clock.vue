<template>
<div>
	<div class="card" style="border: none;">
		<h3 class="clock"> {{ now }}</h3>
	</div>
	<div class="card ring" style="margin-top: -40px;">
		<h3 class="link"><svg style="transform: translateY(3px); margin:0px 0px 0 -5px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="#28ac84" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle fill="#28ac84" cx="12" cy="9" r="2.5"/></svg> Головний корпус / Корпус №1 / Корпус №5</h3>
		<p v-if="timer > 0" style="color: #292e31; margin: -5px 0 21px;"><svg style="transform: translateY(4px); margin: 0px 0px 0 -5px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#292e31" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg> {{ timer }} хв. до кінця пари</p>
		<p>1 пара<span>8:30 - 9:50</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<p>2 пара<span>10:05 - 11:25</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<p>3 пара<span>11:55 - 13:15</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<p>4 пара<span>13:30 - 14:50</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<p>5 пара<span>15:05 - 16:25</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<p>6 пара<span>16:40 - 18:00</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<div style="height: 20px;"></div>
	</div>


	<div class="card ring">
		<h3 class="link"><svg style="transform: translateY(3px); margin:0px 0px 0 -5px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="#28ac84" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle fill="#28ac84" cx="12" cy="9" r="2.5"/></svg> Корпус №2</h3>
		<p v-if="timerkr > 0" style="color: #292e31; margin: -5px 0 21px;"><svg style="transform: translateY(4px); margin: 0px 0px 0 -5px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#292e31" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg> {{ timerkr }} хв. до кінця пари</p>
		<p>1 пара<span>9:00 - 10:20</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<p>2 пара<span>10:35 - 11:55</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<p>3 пара<span>12:25 - 13:45</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<p>4 пара<span>14:00 - 15:20</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<p>5 пара<span>15:35 - 16:55</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<p>6 пара<span>17:10 - 18:30</span></p>
		<div class="progressBar"><div class="progressStatus"></div></div>
		<div style="height: 20px;"></div>
	</div>

</div>
</template>

<script>
export default {
	data () {
		return {
			now: 'loading...',
			timer: 0,
			timerkr: 0

				}
			},
	created: function() {
		this.clockLogic();
	},
	methods: {
		clockLogic: function() {
			setInterval(() => {
			var date = new Date();
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var seconds = date.getSeconds();
			if (seconds < 10 ) {
				var fullSeconds = '0' + seconds;
			} else {
				var fullSeconds = seconds;
			}
			if (minutes < 10 ) {
				var fullMinutes = '0' + minutes;
			} else {
				var fullMinutes = minutes;
			}
			if (hours < 10 ) {
				var fullHours = '0' + hours;
			} else {
				var fullHours = hours;
			}
			this.hours = hours;
			this.minutes = minutes;
			this.seconds = seconds;
			this.now = fullHours + ':' + fullMinutes + ':' + fullSeconds;
			var prog = document.getElementsByClassName('progressStatus')
		// debugger;
		// 1 пара скрипт
		if (this.hours*60+this.minutes >= 8*60+30 && this.hours*60+this.minutes <= 9*60+50) {
		prog[0].style.width = ((this.hours*60+this.minutes)-(8*60+30))/80*100 + '%';
		this.timer = (((this.hours*60+this.minutes)-(8*60+30))-80)*(-1)
		} else if (this.hours*60+this.minutes > 9*60+50) {
			prog[0].style.width = '100%'
		} else {
			prog[0].style.width = '0%'
		};
		// 2 пара скрипт
		if (this.hours*60+this.minutes >= 10*60+5 && this.hours*60+this.minutes <= 11*60+25) {
		prog[1].style.width = ((this.hours*60+this.minutes)-(10*60+5))/80*100 + '%';
		this.timer = (((this.hours*60+this.minutes)-(10*60+5))-80)*(-1)
		} else if (this.hours*60+this.minutes > 11*60+25) {
			prog[1].style.width = '100%'
		} else {
			prog[1].style.width = '0%'
		};
		
		// 3 пара скрипт
		if (this.hours*60+this.minutes >= 11*60+55 && this.hours*60+this.minutes <= 13*60+15) {
		prog[2].style.width = ((this.hours*60+this.minutes)-(11*60+55))/80*100 + '%';
		this.timer = (((this.hours*60+this.minutes)-(11*60+55))-80)*(-1)
		} else if (this.hours*60+this.minutes > 13*60+15) {
			prog[2].style.width = '100%'
		} else {
			prog[2].style.width = '0%'
		};
		// 4 пара скрипт
		if (this.hours*60+this.minutes >= 13*60+30 && this.hours*60+this.minutes <= 14*60+50) {
		prog[3].style.width = ((this.hours*60+this.minutes)-(13*60+30))/80*100 + '%';
		this.timer = (((this.hours*60+this.minutes)-(13*60+30))-80)*(-1)
		} else if (this.hours*60+this.minutes > 14*60+50) {
			prog[3].style.width = '100%'
		} else {
			prog[3].style.width = '0%'
		};
		// 5 пара скрипт
		if (this.hours*60+this.minutes >= 15*60+5 && this.hours*60+this.minutes <= 16*60+25) {
		prog[4].style.width = ((this.hours*60+this.minutes)-(15*60+5))/80*100 + '%';
		this.timer = (((this.hours*60+this.minutes)-(15*60+5))-80)*(-1)
		} else if (this.hours*60+this.minutes > 16*60+25) {
			prog[4].style.width = '100%'
		} else {
			prog[4].style.width = '0%'
		}
		// 6 пара скрипт
		if (this.hours*60+this.minutes >= 16*60+40 && this.hours*60+this.minutes <= 18*60) {
		prog[5].style.width = ((this.hours*60+this.minutes)-(16*60+40))/80*100 + '%';
		this.timer = (((this.hours*60+this.minutes)-(16*60+40))-80)*(-1)
		} else if (this.hours*60+this.minutes > 18*60) {
			prog[5].style.width = '100%'
		} else {
			prog[5].style.width = '0%'
		}

		// 1 кр пара скрипт
		if (this.hours*60+this.minutes >= 9*60 && this.hours*60+this.minutes <= 10*60+20) {
		prog[6].style.width = ((this.hours*60+this.minutes)-(9*60))/80*100 + '%';
		this.timerkr = (((this.hours*60+this.minutes)-(9*60))-80)*(-1)
		} else if (this.hours*60+this.minutes > 10*60+20) {
			prog[6].style.width = '100%'
		} else {
			prog[6].style.width = '0%'
		}

		// 2 кр пара скрипт
		if (this.hours*60+this.minutes >= 10*60+35 && this.hours*60+this.minutes <= 11*60+55) {
		prog[7].style.width = ((this.hours*60+this.minutes)-(10*60+35))/80*100 + '%';
		this.timerkr = (((this.hours*60+this.minutes)-(10*60+35))-80)*(-1)
		} else if (this.hours*60+this.minutes > 11*60+55) {
			prog[7].style.width = '100%'
		} else {
			prog[7].style.width = '0%'
		}

		// 3 кр пара скрипт
		if (this.hours*60+this.minutes >= 12*60+25 && this.hours*60+this.minutes <= 13*60+45) {
		prog[8].style.width = ((this.hours*60+this.minutes)-(12*60+25))/80*100 + '%';
		this.timerkr = (((this.hours*60+this.minutes)-(12*60+25))-80)*(-1)
		} else if (this.hours*60+this.minutes > 13*60+45) {
			prog[8].style.width = '100%'
		} else {
			prog[8].style.width = '0%'
		}

		// 4 кр пара скрипт
		if (this.hours*60+this.minutes >= 14*60 && this.hours*60+this.minutes <= 15*60+20) {
		prog[9].style.width = ((this.hours*60+this.minutes)-(14*60))/80*100 + '%';
		this.timerkr = (((this.hours*60+this.minutes)-(14*60))-80)*(-1)
		} else if (this.hours*60+this.minutes > 15*60+20) {
			prog[9].style.width = '100%'
		} else {
			prog[9].style.width = '0%'
		}

		// 5 кр пара скрипт
		if (this.hours*60+this.minutes >= 15*60+35 && this.hours*60+this.minutes <= 16*60+55) {
		prog[10].style.width = ((this.hours*60+this.minutes)-(15*60+35))/80*100 + '%';
		this.timerkr = (((this.hours*60+this.minutes)-(15*60+35))-80)*(-1)
		} else if (this.hours*60+this.minutes > 16*60+55) {
			prog[10].style.width = '100%'
		} else {
			prog[10].style.width = '0%'
		}

		// 6 кр пара скрипт
		if (this.hours*60+this.minutes >= 17*60+10 && this.hours*60+this.minutes <= 18*60+30) {
		prog[10].style.width = ((this.hours*60+this.minutes)-(17*60+10))/80*100 + '%';
		this.timerkr = (((this.hours*60+this.minutes)-(17*60+10))-80)*(-1)
		} else if (this.hours*60+this.minutes > 18*60+30) {
			prog[10].style.width = '100%'
		} else {
			prog[10].style.width = '0%'
		}









		}, 1000);
		}
	}
}
</script>

<style>
	h2 {

		color: #28ac84;
		font-size: 24px;
			}
</style>
<style scoped>
	.card {
		width: 90vw;
	}
	h3 {
		margin-top: 20px!important;
	}
	h2>span {
		color: #636867;
		font-size: 18px;
		display: block;
	}
	.ring {
		
	}
	.ring p {
		font-size: 16px;
		color: #000201;
		font-weight: 500;
		position: relative;
	}
	.ring span {
		position: absolute;
		right: 0;
		color: #636867;
		font-size: 14px;
	}
	.progressBar {
		background-color: #e9e9e7;
		width: 100%;
		
		height: 2px;
		margin-top: -9px;
    	margin-bottom: 12px;
    	overflow: hidden;
    	border-radius: 5px;
	}
	.progressStatus {
		background-color: #28ac84;
		height: 10px;
		width: 0%;
		transition: all 0.1s ease-out;
	}
	.clock {
		margin-top: 30px;
		color: #28ac84;
		font-weight: 500;
		font-size: 24px;
		transform: translateY(-10px);
	}
	.clock+p {
		font-weight: 500;
		color: #636867;
		font-size: 14px;
		margin-top: -31px!important;

	}
</style>