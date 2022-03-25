from typing import List

def maxArea(height: List[int]) -> int:
    result = 0
    l, r = 0, len(height) - 1
    
    while l < r:
        area = (r - l) * min(height[l], height[r])
        result = max(result, area)
        
        if height[l] < height[r]:
            l += 1
        else:
            r -= 1

    return result

print(maxArea([1,8,6,2,5,4,8,3,7]))
print(maxArea([1,1]))
print(maxArea([5,2,4,6,7,9,3,2,11]))