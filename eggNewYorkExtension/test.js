// data = localStorage.getItem('datas');
// data = data.split(',')
// a = document.querySelectorAll('.dashed-border.my-4 + .row.py-4 > div');
// for(let i=0;i<a.length;i++){
//     data.push(a[i].querySelector('a').getAttribute('href'));
// }
// localStorage.setItem('datas',data);
// console.log(data)
data = localStorage.getItem('datas');
data = data.split(',')
result = {};
for(let i=0;i<data.length;i++){
    result[data[i]] = {
        "status": "new"
    }
}
console.log(result)