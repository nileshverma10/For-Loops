let sum=0;
let pro=1;
for(i=1; i<=10; i++){
  if(i%2==0){
    sum=sum+i;
  }else{
    pro=pro*i;
  }
}
console.log(sum);
console.log(pro);