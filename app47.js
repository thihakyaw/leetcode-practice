/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let values = (list1.length > list2.length) ? list2 : list1;
    let source = (list1.length > list2.length) ? list1 : list2;

    let result = [];

    for(let i = 0; i < values.length; i++){
        if(source.includes(values[i])) {
            result.push(values[i])
        }
    }

    return result;
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]));