class Solution:
    def isPalindrome(s: str) -> bool:
        string = str(s).lower()
        cleaned = ''.join(filter(str.isalnum, string))
        # print(cleaned)
        if cleaned == cleaned[::-1]:
            return True
        else:
            return False

    print(isPalindrome("A man, a plan, a canal: Panama"))