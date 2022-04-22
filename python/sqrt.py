import math

def sqrt(x):
    l, r = 1, x
    
    if x < 2:
        return int(x)
    
    while l < r:
        mid = l + math.floor((r - l) // 2)
        
        if mid * mid == x:
            return int(mid)
        elif mid * mid > x:
            r = mid
        elif mid * mid < x:
                l = mid + 1
                
    return int(l - 1)

print(sqrt(4))
print(sqrt(8))