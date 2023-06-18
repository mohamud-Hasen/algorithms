function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
  
    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;
  
    while (low <= high) {
      const partitionX = Math.floor((low + high) / 2);
      const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
  
      const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
      const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
      const minX = partitionX === m ? Infinity : nums1[partitionX];
      const minY = partitionY === n ? Infinity : nums2[partitionY];
  
      if (maxX <= minY && maxY <= minX) {
        // Even number of elements
        if ((m + n) % 2 === 0) {
          return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        }
        // Odd number of elements
        else {
          return Math.max(maxX, maxY);
        }
      } else if (maxX > minY) {
        high = partitionX - 1;
      } else {
        low = partitionX + 1;
      }
    }
  
    throw new Error('Input arrays are not sorted!');
  }
  
  // Example usage
  const nums1 = [1, 3];
  const nums2 = [2, 4];
  
  const median = findMedianSortedArrays(nums1, nums2);
  console.log('Median:', median);
  