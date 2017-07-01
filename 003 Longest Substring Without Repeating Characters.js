/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        var sLen =  s.length;
        var subLen = 0, subMaxLen = 0;
        var subMinIndex = 0;
        var subString = '', longestSubString = '';
        var rptPos = 0;

        if(sLen === 0){
            return 0;
        }

        subString = s[0];
        subLen = 1;
        for(var i = 1; i < sLen; i++){
            rptPos = subString.indexOf(s[i]);
            if(rptPos === -1){ //当前字串没有遇到重复字符
                subString += s[i];
                subLen++;
            }else{ //字串遇到第一个重复字符
                if(subLen > subMaxLen){
                    subMaxLen = subLen;
                    longestSubString =  subString;
                }

                if(i < sLen){ // i = sLen
                    subMinIndex +=  rptPos + 1;
		    subLen = i + 1 - subMinIndex;
		    subString = s.substr(subMinIndex, subLen);
                } 
            }
        }

        if(subLen > subMaxLen){
            subMaxLen = subLen;
            longestSubString =  subString;
        }

        return subMaxLen;
};
