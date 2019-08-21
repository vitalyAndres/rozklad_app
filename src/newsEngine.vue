<template>
<div style="padding: 0 10px; margin-bottom: 85px; margin-top: 1px;">
	<div>
		<div style="margin-bottom: 20px;" v-for="(item, key) in newsList.items">
			<div style="display: flex; position: relative;">
				<img v-if="item.thumbnail !== ''" v-bind:src="item.thumbnail" style="margin-right: 10px; height: 45px; width: 45px; border-radius: 5px;">
				
				<a class="news__link" v-bind:href="item.link" style="-webkit-tap-highlight-color: transparent; color: #000; text-decoration: none;"><span style="margin-bottom:-16px; display:block;">{{ item.title }}</span> <br> <img src="static/calendar.svg" height="14px;" style="  margin-right: 5px; transform: translateY(1px);"><span class="news__info" style="color: #636867; font-size: 14px; margin-top: 5px; ">{{ item.pubDate.substr(0,10) }}</span>
				<img src="static/clock.svg" height="15px;" style="margin: 0px 2px 0 5px; transform: translateY(2px);"><span class="news__info" style="color: #636867; font-size: 14px; margin-top: 5px;">{{ item.pubDate.substr(10,6) }}</span></a>
			</div>
			<div style="width: 100%; height: 1px; background-color: #636867; opacity: 0.1; margin-top: 15px;"></div>
		</div>
	</div>
	<a class="read-more-button" href="http://ua-news.mnau.edu.ua/">Більше новин</a>
</div>
</template>
<script src="" type="text/javascript"></script>
<script>
export default {
	data () {
		return {
				activeWeek: 'numer',
				news: 'closed',
				newsList: 'Новини завантажуються'
				}
			},
	mounted: function() {
		this.getNews()
	},
	methods: {
	getNews: function() {
			const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
			axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2Fnews-mnau').then((data)=>{
			this.newsList = data.data;
			var myJSON = JSON.stringify(this.newsList);
			this.newsList = JSON.parse(text);
			console.log(this.newsList)
			});
		},
	}
}
</script>
<style>
	.read-more-button {
		text-align: center;
	display: block;
	margin: auto;
	text-decoration: none;
	background-color: rgba(99, 104, 103, 0.15);
	color: #636867;
	width: 180px;
	padding: 9px 0px;
	border-radius: 5px;
	transition: all 0.2s ease-in-out;
	font-weight: 600;
	}
	.read-more-button:hover {
	background-color: rgba(40, 172, 132, 0.2);
	color: rgba(40, 172, 132, 1);
	}
</style>
<style scoped>
	.news__link {
		font-weight: 600;
	}
	div.padded {
		padding: 5px 10px;
	}
	h2>span {
		color: #636867;
		font-size: 18px;
		display: block;
	}
	.news-button {
		position: absolute;
		top: 42px;
		right: 6%;
	}
	.news-button::before {
		content: '';
		background-color: #636867;
		opacity: .15;
		position: absolute;
		border-radius: 50%;
		width: 35px;
		height: 35px;
		top: -4px;
		right: -20%;
		z-index: -1;
	}
</style>