var intersection = function(nums1, nums2) {

 let result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      if (!result.includes(nums1[i])) {
        result.push(nums1[i]);
      }
    }
  }
  return result;

    
};

// approach 2

var intersection = function(nums1, nums2) {
    let set = new Set(nums1)
    let result = new Set()
    for(let i=0; i<nums2.length; i++) {
        if(set.has(nums2[i])) result.add(nums2[i])
    }
    return Array.from(result)
};

// approach 3

var intersection = function(nums1, nums2) {
    const output = [];
    const hashmap = new Map();
    
    for (let i = 0; i < nums1.length; i++) {
        hashmap.set(nums1[i], i);
    }
    
    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        if (hashmap.has(num)) {
            output.push(num);
            hashmap.delete(num);
        }
    }
    
    return output;
};

// approach 4

var intersection = function(nums1, nums2) {
    
    let ans = new Array();

    for(let i=0; i<nums1.length; i++)
    {
        for(let j=0; j<nums2.length; j++)
        {
            if(nums1[i]==nums2[j])
            {
                let temp = nums1[i];
                if(!ans.includes(temp))
                    ans.push(temp)
            }
        }
    }
    return ans;
};

//approach 5

var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let intersection = new Set([...set1].filter(x =>set2.has(x)));
    return Array.from(intersection);
};

var intersection = function(nums1, nums2) {
    let result=[];
    for(let i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])&&!result.includes(nums1[i])){
            result.push(nums1[i]);
        }
    }
    return result
};


// iN jAVA

// List<Integer> intersectionList = new ArrayList<>();
        
//         for (int num1 : nums1) {
//             for (int num2 : nums2) {
//                 if (num1 == num2 && !intersectionList.contains(num1)) {
//                     intersectionList.add(num1);
//                 }
//             }
//         }
        
        // Convert the list to an array
//         int[] result = new int[intersectionList.size()];
//         for (int i = 0; i < intersectionList.size(); i++) {
//             result[i] = intersectionList.get(i);
//         }
        
//         return result;
