function condense(nums) {
    
    let condense = [];

        while (nums.length > 1){
        for (let i = 0; i < nums.length - 1; i++) {
            condense.push(nums[i] + nums[i + 1]);
            
        }
        nums = condense.slice();
        condense = [];
    }
    console.log(nums[0]);
}
condense([5,0,4,1,2]);