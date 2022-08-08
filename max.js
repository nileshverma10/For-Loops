function divisibleByKII(num,k) {
    //write code here
    sum=0;
    for(let i=1; i<=num; i++){
        if(i%k==0){
            sum=sum+i;
        }
    }
    console.log(sum);
}

