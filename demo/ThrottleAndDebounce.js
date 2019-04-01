/**
 * 节流函数 Throttle
 * 应用场景：scroll 事件；
 * @param fun 事件触发的操作
 * @param duration 间隔多少毫秒需要触发一次事件
 */
function Throttle(fun,duration){
	let args = arguments, timer,
		start = new Date; // 初始化就开始计时，保证页面加载完后可以立即执行第一次
	return function(){
		let self = this;
		let remainTime = duration - (new Date - start);
		timer && clearTimeout(timer);
		if(remainTime <= 0){
			fun.apply(self, args);
			start = now;
		}else{
			// 让方法在脱离事件后也能执行一次
			timer = setTimeout(()=> {
				fun.apply(self,args)
			}, remainTime);
		}
	}
}

/**
 * 防抖函数 Debounce
 * 应用场景：提交按钮点击事件；inputChange 事件
 * @param fun 事件触发的操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
function Debounce(fun,delay){
	let timer = null;
	return function(){
		let self = this,
			args = arguments;
			timer && clearTimeout(timer);
			timer = setTimeout(()=>fun.call(self,args),delay);
	}
}