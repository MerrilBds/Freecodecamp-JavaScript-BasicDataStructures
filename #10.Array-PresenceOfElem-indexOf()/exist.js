/*
indexOf() takes an element as a parameter, and when called, 
it returns the position, or index, of that element, or -1 if the element does not exist on the array.
*/
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >=0) {
        return true;
    }
    return false;

}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));