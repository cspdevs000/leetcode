var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    if (strs.length == 1) return strs[0];
    prefix = strs[0];
    for (i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.isEmpty) return "";
        }        
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["reception","receive","recebov"]));