### javascript常用技巧及方法  
#### 1. 格式化日期和时间

> 在 src/libs/function目录下创建 timeFormat.js文件
```javascript
module.exports = {
	timeFormat(timestamp = null,fmt = 'yyyy-mm-dd') {
		// 其他更多是格式化有如下:
		// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
		timestamp = parseInt(timestamp);
		// 如果为null,则格式化当前时间
		if (timestamp == null) timestamp = Number(new Date());
		// 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
		if (timestamp.toString().length == 10) timestamp *= 1000;
		let date = new Date(timestamp);
		let ret;
		let opt = {
			"y+": date.getFullYear().toString(), // 年
			"m+": (date.getMonth() + 1).toString(), // 月
			"d+": date.getDate().toString(), // 日
			"h+": date.getHours().toString(), // 时
			"M+": date.getMinutes().toString(), // 分
			"s+": date.getSeconds().toString() // 秒
			// 有其他格式化字符需求可以继续添加，必须转化成字符串
		};
		for (let k in opt) {
			ret = new RegExp("(" + k + ")").exec(fmt);
			if (ret) {
				fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
			};
		};
		return fmt;
	}
}
```
> 使用方式如下:  

```javascript
timeFormat(Date.now(),'yyyy-mm-dd hh:MM')
timeFormat(Date.now(),'yyyy-mm-dd')
```

#### 2. 个性化时间转化

> 使用该函数之前需要引入 timeFormat.js文件

```javascript
import {timeFormat} from 'src/libs/function/timeFormat.js';
module.exports = {
	timeFrom(timestamp = null, format = 'yyyy-mm-dd'){
		if (timestamp == null) timestamp = Number(new Date());
		timestamp = parseInt(timestamp);
		// 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
		if(timestamp.toString().length == 10) timestamp *= 1000;
	    var timer =  (new Date()).getTime() - timestamp;
		timer = parseInt(timer / 1000);
		// 如果小于5分钟,则返回"刚刚",其他以此类推
		let tips = '';
		switch(true) {
			case timer < 300: 
				tips = '刚刚'; break;
			case timer >= 300 && timer < 3600:
				tips = parseInt(timer / 60) + '分钟前'; break;
			case timer >= 300 && timer < 86400:
				tips = parseInt(timer / 3600) + '小时前'; break;
			case timer >= 300 && timer < 2592000:
				tips = parseInt(timer / 86400) + '天前'; break;
			default :
				tips = timeFormat(timestamp, format);
		}
	    return tips;
	}
}
```

