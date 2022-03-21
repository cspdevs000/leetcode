def convert(s: str, numRows: int) -> str:
    if numRows == 1: return s
    
    result = ""
    for r in range(numRows):
        increment = 2 * (numRows - 1)
        for i in range(r, len(s), increment):
            result += s[i]
            if (r > 0 and r < numRows - 1 and 
                i + increment - 2 * r < len(s)):
                result += s[i + increment - 2 * r]
            
    return result

print(convert("PAYPALISHIRING", 3))
print(convert("PAYPALISHIRING", 4))
print(convert("PAYPALISHIRING", 5))