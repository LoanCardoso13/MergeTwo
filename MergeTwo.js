// While neither of the arrays length is zero, do
// Check first element of each and store the lowest

// list1 = [1,2,4];
// list2 = [1,3,4];
list1 = [];
list2 = [0];
output = [];

while ((list1.length && list2.length) !== 0) {
    if (list1[0] < list2[0]) {
        output.push(list1.splice(0,1)[0]);
    } else {
        output.push(list2.splice(0,1)[0]);
    }
}

output = output.concat(list1, list2);

alert(output);