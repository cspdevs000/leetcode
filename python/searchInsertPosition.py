def searchInsert(nums, target) -> int:
    l, r = 0, len(nums) - 1

    while l <= r:
        mid = (l + r) // 2

        if target == nums[mid]:
            return mid

        if target > nums[mid]:
            l = mid + 1
        else:
            r = mid - 1

    return l

print(searchInsert([1,3,5,6], 5))
print(searchInsert([1,3,5,6], 2))