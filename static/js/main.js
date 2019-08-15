/**
 * Created by coselding on 2017/5/3.
 */

//加载恋爱天数
function loadLoveDay(id) {
    var start = '2012/07/05 00:00:00';  //开始时间
    var today = new Date();    //结束时间
    var mills = today.getTime() - new Date(start).getTime();//时间差的毫秒数

    //------------------------------

    //计算出相差天数
    var days = Math.floor(mills / (24 * 3600 * 1000));
    console.log("days = " + days);
    $('#' + id).html(days);
}
