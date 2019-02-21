/*demo*/
/**
 * 节流函数
 * @param fun 事件触发的操作
 * @param interval 间隔多少毫秒需要触发一次事件
 */
function Throttle(fun,interval){
	let timer,
		args = arguments,
		start;
	return function Loop(){
		let self = this;
		let now = Date.now();
		if(!start){
			start = now;
		}
		
		if(timer){
			clearTimeout(timer);
		}
		
		if(now - start >= interval){
			fun.apply(self,args);
			start = now;
		}else{
			timer = setTimeout(()=>Loop.apply(self,args), 50);
		}
	}
}

function Debounce(fun,delay){
	let timer = null;
	return function(){
		let self = this,
			args = arguments;
			timer && clearTimeout(timer);
			timer = setTimeout(()=>fun.call(self,args),delay);
	}
}