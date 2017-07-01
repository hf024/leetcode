   /**
 * Author: huangf
 * Date: 2017/7/1
 */

   /**
    Example 1:
    nums1 = [1, 3]
    nums2 = [2]

    The median is 2.0
    Example 2:
    nums1 = [1, 2]
    nums2 = [3, 4]

    The median is (2 + 3)/2 = 2.5
    */

   /**
    * @param {number[]} nums1
    * @param {number[]} nums2
    * @return {number}
    */
   /**
    * @param {number[]} nums1
    * @param {number[]} nums2
    * @return {number}
    */
   var findMedianSortedArrays = function(nums1, nums2) {
       var len1 = nums1.length, len2 = nums2.length, len = 0;
       var nums = [];
       var i = 0, j = 0, k = 0;

       while(i < len1){
           if(j < len2){
               if(nums1[i] <= nums2[j]){
                   nums[len++] =  nums1[i++];
               }else{
                   nums[len++] =  nums2[j++];
               }
           }else{
               nums[len++] = nums1[i++];
           }
       }

       while(j < len2){
           nums[len++] = nums2[j++];
       }

       if (len % 2){
           return parseFloat(nums[Math.floor(len/2)]);
       }else{
           return parseFloat((nums[len/2] + nums[len/2 - 1] ) /2);
       }
   };
