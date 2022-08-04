function sumOfMultiples(n,k,y) {
    //write code here
     let pro=1;
     let sum=0;
    for(i=1; i<=k; i++){
        pro=n*i;
    if(pro%y==0){
       sum=sum+pro; 
    }
   
    } 
     console.log(sum);
}
