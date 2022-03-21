#Longest Substring Without Repeating Characters

def lengthOfLongestSubstring(s: str) -> int:
    charSet = set()
    l = 0
    result = 0
    
    for r in range(len(s)):
        while s[r] in charSet:
            charSet.remove(s[l])
            l += 1
        charSet.add(s[r])
        result = max (result, r - l + 1)
    return result

print(lengthOfLongestSubstring("abcabcbb"))
print(lengthOfLongestSubstring("bbbbbb"))
print(lengthOfLongestSubstring("pwwkew"))
print(lengthOfLongestSubstring("lkadsfjljksdjflkasdjflkdasfjskljgjkaskjgjkksglkjfsakgjfslglasfgasflgkajsflgkjalfsjgjasfkfkk"))