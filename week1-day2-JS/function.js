// 1. Declaration function
/*

function myFunc(log)
{
    console.log(log);
}
myFunc("Say hello to S3Corp")

*/


// 2. Expression function
/*

const sayHello = function(log)
{
    console.log(log);
}
sayHello("Slay")

*/


// 3. Arrow function

/*

const sayHello = (log) =>
{
    console.log(log);
}
sayHello("Slay")

Hoặc có thể ghi đơn giản hơn: 

const sayHello = log => console.log(log);
sayHello("Slay")

*/

// Mục đích của arrow function sinh ra để code trông nhìn gọn và nhanh hơn.
// Một số lưu ý: arrow function không có context của nó. Nghĩa là nó không thể sử dụng từ khóa this.
// arrow function không thể dùng làm constructor