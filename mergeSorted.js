var mergeTwoLists = function(list1, list2) {
    let i = 0, j = 0;
    let result = [];

    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) {
            result.push(list1[i]);
            i++;
        } else {
            result.push(list2[j]);
            j++;
        }
    }
    while (i < list1.length) {
        result.push(list1[i]);
        i++;
    }

    while (j < list2.length) {
        result.push(list2[j]);
        j++;
    }

    return result;
};

console.log(mergeTwoLists([1,2,3],[0,1,1,2,4]))