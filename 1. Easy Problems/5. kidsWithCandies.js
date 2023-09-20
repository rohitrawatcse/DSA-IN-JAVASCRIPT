var kidsWithCandies = function(candies, extraCandies) {
     // Find the maximum number of candies among all kids initially.
    let maxCandies = Math.max(...candies);
    
    // Create an array to store the results.
    let result = [];
    
    // Check if adding extraCandies to each kid's candies count makes them have the greatest number of candies.
    for (let candy of candies) {
        result.push(candy + extraCandies >= maxCandies);
    }
    
    return result;
};