/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var checkOverlap = function(interval1, interval2) {
    return (interval1[0] >= interval2[0] && interval1[0] < interval2[1] || 
        interval2[0] >= interval1[0] && interval2[0] < interval1[1])
}

var canAttendMeetings = function(intervals) {
    if(intervals.length == 1) {
        return true
    }

    for(let i = 0; i < intervals.length; i++) {
        for( j = i+1; j < intervals.length; j++){
            if(checkOverlap(intervals[i], intervals[j])) {
                return false;
            }
        }
    }   
    return true; 
};

console.log(canAttendMeetings([[9,10],[4,6]]));
console.log(canAttendMeetings([[13,15],[1,13]]));
console.log(canAttendMeetings([[8,11],[17,20],[17,20]]))
console.log(canAttendMeetings([[9,10],[4,9],[4,17]]))