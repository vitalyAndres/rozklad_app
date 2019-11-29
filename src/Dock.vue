<template>
<div>
	<div id="dockBar" > <!--Dock-bar component begin-->
	<div class="wraper">
		<div class="icon " v-bind:class="{tabActive: activeTab == 'schedule'}" id="scheduleIcon" @click="activeTab = 'schedule'; changeTab(); scrollToTop()">
			<svg class="schedule" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"/></svg>
			<p>Розклад</p>
		</div>
		<div class="icon" v-bind:class="{tabActive: activeTab == 'ring'}" @click="activeTab = 'ring'; changeTab(); scrollToTop()">
			<svg class="ring" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
			
			<p>Дзвінки</p>
		</div>
		<div class="icon" v-bind:class="{tabActive: activeTab == 'settings'}" @click="activeTab = 'settings'; changeTab(); scrollToTop()" >
			<svg class="settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
			<p>Налаштування</p>
		</div>
	</div>
	</div> <!--Dock-bar component end-->
</div>
</template>

<script>
export default {
	data () {
		return {
			activeTab: 'schedule'
				}
			},
	methods: {
		changeTab: function() {
		this.$emit('tabChanged', this.activeTab)
			},
		scrollToTop: function() {
			window.scrollTo({
		    top: 0
		});
		}
		}
		}
</script>

<style scoped>
#dockBar {
		height: 65px;
		display: flex;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		width: 100vw;
		background-color: #fdfdfd; 
		box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);
		opacity: 0.96;
		border-top: solid 1px rgba(0, 0, 0, 0.13);
}
div.wraper {
	display: flex;
	-webkit-flex-direction: row;
	-moz-flex-direction: row;
	-ms-flex-direction: row;
	-o-flex-direction: row;
	flex-direction: row;
	margin: auto;
	align-items: center;
}
.icon {
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	justify-content: center;
	align-items: center;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	-ms-flex-direction: column;
	-o-flex-direction: column;
	flex-direction: column;
	padding-top: 12px;
	color: #292e31;
	fill: #292e31;
}
.tabActive {
	fill: #2382da;
	color: #2382da;
}
.tabActive svg {
	fill: #2382da;
	color: #2382da;
	animation-timing-function: ease-in-out;
    animation-duration: 1.6s;
}
.tabActive svg.settings {
	animation-name: settings;
}
.tabActive svg.ring {
	animation-name: ring;
}
.tabActive svg.schedule {
	animation-name: schedule;
}
@keyframes settings {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(15deg); }
  50%  { transform: rotate(250deg); }
  100% { transform: rotate(180deg); }
}
@keyframes ring {
  0%   { transform: scale(1) rotate(0deg); }
  15%   { transform: scale(1) rotate(-15deg); }
  25%  { transform: scale(1) rotate(15deg); }
  50%  { transform: scale(1)rotate(-15deg); }
  75%  { transform: scale(1)rotate(15deg); }
  100% { transform: scale(1) rotate(0deg); } 
}
@keyframes schedule {
  0%   { transform: scale(1); }
  25%  { transform: scale(1.05) skewX(4deg); }
  50%  { transform: scale(0.9); }
  75%  { transform: scale(1.05); }
  100% { transform: scale(1); } 
}
.tabActive svg {
	
}
.icon>svg {
	margin: 3px 0;
}
.icon>p {
	font-size: 13px;
	font-weight: 600;
	margin-top: 2px;
}
#dockBar svg {
	width: 25px;
	margin: 0 10vw;
}
</style>