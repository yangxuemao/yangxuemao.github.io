/**
 * Promise 简易版实现
 * 参考：https://mobile.yangkeduo.com/luyd_cls1.html?_wv=41729&_wvx=10&query_uid=2753943009&lucky_bag_id=6072641860539413009&campaign=luckybag&luckybag_share_platform=wechat&message_tag=tl_t133&_x_cid=luckybag_personal_icon&_x_campaign=luckybag&_x_share_id=CjGdpAybFeaVMNGXJe6RHEawDYmAvhcd&refer_share_id=FlnVndMxnDg9gwnvwQgNoKW2XJThkmbV&refer_share_uid=2753943009&refer_share_channel=message
 */

function Promise(fn){
    var callbacks = [],
        value = null,
        state = "pending";
    this.then = function(onFulfilled, onRejected){
        return new Promise(function(resolve,reject){
            handle({
               onFulfilled: onFulfilled || null,
               onRejected: onRejected || null,
               resolve: resolve,
               reject: reject
            });
        });

    };
    function handle(callback){
        if(state === "pending"){
            callbacks.push(callback);
            return this;
        }
        var cb = state === "fulfilled" ? callback.onFulfilled : callback.onRejected,
            ret;
        if(cb === null){
            cb = state === "fulfilled" ? callback.resolve : callback.reject;
            cb(value);
            return;
        }
        ret = cb(value);
        callback.resolve(ret);
    }
    function resolve(newValue){
        if(newValue && (typeof newValue === 'object' || typeof newValue  === 'function')){
            var then = newValue.then;
            if(typeof then === 'function'){
                then.call(newValue, resolve, reject);
                return;
            }
        }
        value = newValue;
        state = "fulfilled";
        execute();
    }
    function reject(reason){
        state = 'rejected';
        value = reason;
        execute();
    }
    function execute(){
        setTimeout(()=>{
            callbacks.forEach(function(callback){
                handle(value);
            });
        },0);
    }
    fn(resolve);
}