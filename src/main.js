import {change} from './chang.js'
import {tab} from './tab.js';


change()
tab()


import './styles/change.css'
import './styles/tab.less'

//引入
import gifStr from './assets/1.gif';
import pngStr from './assets/logo_small.png';

//动态生成
const gif = document.createElement('img');
const png = document.createElement('img');
//赋值
gif.src = gifStr
png.src = pngStr
//插入
document.body.appendChild(gif);
document.body.appendChild(png);


import './assets/fonts/iconfont.css'

// import App from './App.vue'


