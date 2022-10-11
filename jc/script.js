let week = prompt(' HAFTA KUNINI YOZING ')
switch (week)
{
     case 'MONDAY':
        console.log('TUESDAY');
        break;
     case 'TUESDAY':
        console.log('WEDNESDAY')
        break;
    case 'WEDNESDAY':
        console.log('THURSDAY');
        break;
    case 'THURSDAY':
        console.log('FRIDAY');
        break;
    case 'FRIDAY':
        console.log('SATURDAY');
        break;
    case 'SATURDAY':
        console.log('SUNDAY');
        break;
    case 'SUNDAY':
        console.log('MONDAY');
        break;
}
let num = prompt ('raqam kiriting');

if(num % 2 ==0){
       alert("juft son");
}else{
    alert("toq son");
}