// Let, const được sinh ra trong ES6 với mục đích là thay thế var trong việc khai báo các biến

// điểm giống nhau: var, let const đều có thể dùng để khai báo biến 

/*
var a = 4;
let b = 5;
const c = 6;
*/

// điểm khác nhau thứ nhất: Var là global scope, còn let và const là local scope. Nghĩa là nếu gọi let và const bên ngoài phạm vi của nó sẽ bị thông báo lỗi

/*
if(true)
    {
        var a = 4;
    }
console.log(a)

Đoạn code trên không báo lỗi

*/

/*
if(true)
    {
        let/const a = 4;
    }
console.log(a)

Đoạn code trên sẽ báo lỗi
*/


// điểm khác nhau thứ hai: Var được hỗ trợ hoisting. Nghĩa là trình biên dịch sẽ tự động khai báo các biến lên đầu.

/*

a = 1;
var a;
console.log(a)

Đoạn code trên không báo lỗi
 */



// điểm khác nhau thứ ba: Đối với const. Không thể gán biến lần 2 cho nó.
/*
const a = 5;
a = 7;

Đoạn code trên sẽ báo lỗi.

*/


/*
Vậy ta sẽ dùng var trong việc code JS thuần
Let và const sẽ được sử dụng khi thông qua 1 thư viện nào khác như Babel thì ta sẽ dùng let, const.
*/