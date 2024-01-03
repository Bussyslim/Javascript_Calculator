let result= document.getElementById('result');
let nums= document.querySelectorAll('li');

for(let i=0; i<nums.length; i++){
    //console.log(nums[i].innerHTML);


nums[i].addEventListener('click', function(){
    //console.log(nums[i].innerHTML);
    let getvalue= document.getElementById('result').value;
    if(nums[i].innerHTML=="="){
        result.value = eval(result.value)
    }
    else{
        if(nums[i].innerHTML== "C" || nums[i].innerHTML== "CE"){
            result.value== "";
        }
        else{
            result.value +=nums.innerHTML;
        }

        if(nums[i].innerHTML== "Del"){
            result.value=getvalue.slice(0,-1);
        }
        
        
    }

})
}
