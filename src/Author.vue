<template>
<div>
	<div class="card" style="margin-top: -20px;" >
		<p style="color: rgb(80, 80, 80); font-size: 16px; font-weight: 600">Створено з <span style="color: red;">❤</span> за допомогою Vue.js, Axios та Apache Cordova</p>
	</div>
	<div class="card" style="margin-top: -20px; ">
		<a target="_blank" href="https://uadd.me/endres?utm=rozklad_app">
			
			<svg class="social__like__icon" xmlns="http://www.w3.org/2000/svg" fill="red" width="25" height="25" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
			<p style="color: #000201; font-size: 16px;  padding-left: 15px;">Сторінка автора додатку<br />
				<span style="color: #636867; font-size: 14px; ">Звертайтесь щодо співпраці</span>
			</p>
		</a>
	</div>
	<div class="card" style="margin-top: -20px; ">
		<a target="_blank" href="https://www.instagram.com/rozklad.mnau/">
				<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path xmlns="http://www.w3.org/2000/svg" fill="#636867" d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"/><circle xmlns="http://www.w3.org/2000/svg" fill="#636867" cx="11.994" cy="11.979" r="3.003"/></svg>
			<p style="color: #000201; font-size: 16px;  padding-left: 15px;">Сторінка проєкту в Instagram<br />
				<span style="color: #636867; font-size: 14px; ">Подякуйте лайком та підпискою</span>
			</p>
		</a>
	</div>
	<div class="card" style="margin-top: -20px; ">
		<a target="_blank" href="https://www.mnau.edu.ua/">
			<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#636867" d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></svg>
			<p style="color: #000201; font-size: 16px;  padding-left: 15px;">Миколаївський НАУ <br />
				<span style="color: #636867; font-size: 14px; ">Сайт університету</span>
			</p>
		</a>
	</div>
	<div class="card" style="margin-top: -20px; ">
		<a target="_blank" href="https://rozklad.mnau.edu.ua/">
			<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="#636867" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
			<p style="color: #000201; font-size: 16px;  padding-left: 15px;">Сайт проєкту<br />
				<span style="color: #636867; font-size: 14px; ">Про проєкт</span>
			</p>
		</a>
	</div>
	<div class="card" style="margin-top: -20px; ">
		<a target="_blank" href="https://rozklad.mnau.edu.ua/build/">
			<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path xmlns="http://www.w3.org/2000/svg" fill="#636867" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/></svg>
			<p style="color: #000201; font-size: 16px;  padding-left: 15px;">Додати розклад <br />
				<span style="color: #636867; font-size: 14px; ">Конструктор розкладу</span>
			</p>
		</a>
	</div>
	
<div class="card" style="margin-top: -20px; ">
	<a target="_blank" href="https://t.me/rozklad_mnau_bug">
		
	<svg aria-hidden="true" data-prefix="fas" data-icon="bug" class="svg-inline--fa fa-bug fa-w-16" role="img" width="23px" height="23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#636867" d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"></path></svg>
	<p style="color: #000201; font-size: 16px;  padding-left: 15px;">Виявили помилку? <br />
		<span style="color: #636867; font-size: 14px; ">Повідомте мені про неї</span>
	</p>
</a>
</div>

<div class="card" style="margin-top: -20px; ">
<div style="display: flex; flex-direction: row; align-items: center; text-decoration: none;" >
<svg aria-hidden="true" data-prefix="fas" data-icon="info-circle" class="svg-inline--fa fa-info-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 512 512"><path fill="#636867" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
<p style="color: #000201; font-size: 16px;  padding-left: 15px;">Розклад МНАУ<br />
	<span style="color: #636867; font-size: 14px; ">1.5.0</span>
</p>
</div>
</div>
</div>
</template>
<script>
export default {
	data () {
		return {
			}
		}
	
}
</script>
<style>
	
.social__like__icon {
		animation-duration: 0.5s;
		animation-name: beating;
		animation-iteration-count: infinite;
	}
	@keyframes beating {
		0%   { transform: scale(1); }
		25%  { transform: scale(0.9); }
		75%  { transform: scale(1.05); }
		100% { transform: scale(1); }
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
		
	}
	.cab::before {
		content: " ";
		color: ;
	}
</style>
<style scoped>
	html {
box-sizing: border-box;
}
.card a {
	margin-bottom: -5px;
	display: flex; flex-direction: row; align-items: center; text-decoration: none;
}
.card a p, .card a span {
	font-weight: 600;
}
*,
*:before,
*:after {
/* box-sizing: content-box;*/
}
body {
font-size: 16px;
}
.toast {
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
}
.active {
	transform: translateY(0px);
}
.toast>p>a{
	position: absolute;
right: 25px;
text-decoration: none;
color: #28ac84;
font-weight: 600;
}
a {
	-webkit-tap-highlight-color: transparent;
}
.ig-control {
margin: 10px 0;
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
z-index: 5;
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