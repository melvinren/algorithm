/** 
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
*/

/**
 * 寻找两个有序数组的中位数
 * @param {*} nums1 
 * @param {*} nums2 
 */
var findMedianSortedArrays = function(nums1, nums2){
    var len1 = nums1.length;
    var len2 = nums2.length;
    if(len2 < len1){
        var temp = [];
        temp = nums1;
        nums1 = nums2;
        nums2 = temp;
        len1 = nums1.length;
        len2 = nums2.length;
    }
    var imin = 0, imax = len1;
    var half = Math.floor((len1 + len2 + 1)/2)
    while(imin <= imax){
        var i = Math.floor((imin + imax) / 2)
        var j = half - i;
        if(nums1[i] < nums2[j-1]){
            imin = i + 1;
        } else if(nums1[i-1] > nums2[j]){
            imax = i - 1;
        } else {
            var maxleft = 0;
            if(i===0) { 
                maxleft = nums2[j-1];
            } else if(j===0) { 
                maxleft = nums1[i-1]; 
            } else {
                maxleft = Math.max(nums1[i-1], nums2[j-1])
            }
            if((len1 + len2) % 2 === 1) {
                return maxleft;
            }
            var minright = 0;
            if(i===len1){
                minright = nums2[j]
            } else if(j=== len2){
                minright = nums1[i]
            } else {
                minright = Math.min(nums2[j], nums1[i])
            }
            return (maxleft + minright) / 2
        }
    }
    return 0;
}