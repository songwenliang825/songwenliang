 const scanf=require('scanf');
// console.log('123');

// let a=20,b=10;
// let a=0;
// b=0;
// console.log('a='+a,'b='+b);

// console.log('请输入两个数，计算两个数的和：请按回车继续');
// scanf('%d');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// console.log('a+b='+a+b);

// console.log('输入两个数，判断两个数，并输出最大值');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// if(a>b){
//     console.log('最大值是a：'+a);
// }else if(b>a){
//     console.log('最大值是b：'+b);
// }else{
//     console.log('a=b='+a);
// }

// let a=1;
// b=2;
// console.log(a);
// let xinlong={
//     a:1,
//     b:2,
// }
// console.log(xinlong);
// console.log('欢迎进入坐标系统')
// let arr=[];
// while(1){
//     console.log('1---添加一个坐标');
//     console.log('2---显示全部坐标');
//     console.log('3---删除最后一个坐标');
//     console.log('4---退出');
//     let con=scanf('%d');
//     if(con===1){
//         console.log('1---添加一个坐标');
//         console.log('请输入横坐标：');
//         let x=scanf('%d');
//         console.log('请输入纵坐标：');
//         let y=scanf('%d');
//         let zuobiao={
//             'x':x,
//             'y':y,
//         };
//         arr.push(zuobiao);  //往数组中添加一个数字
//         console.log('添加坐标成功');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---显示全部坐标');
//         for(let i=0;i<arr.length;i++){
//             let syk=arr[i];
//             // console.log(syk);
//             console.log(`第${i+1}坐标为(${syk.x},${syk.y})`);
//         }
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---删除最后一个坐标');
//         arr.pop();  //删除数组中最后一个数字
//         console.log('删除坐标成功');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('退出');
//         break;
//     }
// }

// let arr=[1,2,3];
// console.log('数组arr:长度为'+arr.length+'\n分别是:'+arr);

let arr=[1,2,3,4,5,6];
// 循环遍历数组
for(let i=0;i<arr.length;i++){
    let xinlong = arr[i];
    console.log(xinlong);
}
