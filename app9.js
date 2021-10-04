var lengthOfLastWord = function(s) {
    s = s.replace(/\s\s+/g, ' ');
    s = s.split(' ');
    
    if (s[s.length -1] == '') {
        return s[s.length -2].length;
    };

    return s[s.length -1].length;
};

var lengthOfLastWord = function(s) {
    let p = s.length, length = 0;
    
    while (p > 0) {
        p--
        
        if(s[p] != ' ') {
            length++;
        }
        
        else if (length > 0) {
            return length;
        }
    }
    return length
};