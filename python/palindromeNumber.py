class Solution:
    def isPalindrome(self, x):
        return str(x) == str(x)[::-1]

    print(isPalindrome('x', 121))
    print(isPalindrome('x', 1221))
    print(isPalindrome('x', 12221))
    print(isPalindrome('x', 12111))
    print(isPalindrome('x', 121131))
    print(isPalindrome('x', 123131))

#first solution
    # def isPalindrome(self, x: int) -> bool:
    #     if x < 0:
    #         return False
        
    #     div = 1 
    #     while x >= 10 * div:
    #         div *= 10
            
    #     while x:
    #         right = x % 10
    #         left = x // div
            
    #         if left != right:
    #             return False
            
    #         x = (x % div) // 10
    #         div = div / 100
            
    #     return True