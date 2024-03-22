
// Kids With Greater Number Of Candies

var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(ele=> ele+extraCandies>=Math.max(...candies))
};