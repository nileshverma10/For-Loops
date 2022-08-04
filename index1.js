function masaiDivisors(left, right, k) {
    //write code here
    count=0;
    for(let i=left; i<=right; i++){
        if(i%k==0){
            count++;
        }
    }
    console.log(count);
}
