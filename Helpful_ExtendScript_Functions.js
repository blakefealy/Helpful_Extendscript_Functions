/*  writeAllArray Information:
    Function to "writeln" all items into the console for a given array
    array = the array you want written into the console
    specString = the specific info you want in string form (i.e. "name" to get array.name)
    OUTPUT: (on success) count of array, array items, end of array message in console (on failure) message of failure in console.
*/
function writeAllArray (array, specString) {
    if(array.length > 0){
        $.writeln("GIVEN ARRAY HAS " + array.length + " ITEMS")
     for(var a = 0; a < array.length; a++){
        $.writeln("at position " + a + " of array is " + array[a][specString]);
    }} else {
        $.writeln("no or one item(s) found in array");
    }
    $.writeln("----  END OF ARRAY ITEMS  ----");
}


/*  traverseAllItems Information:
    Function to loop through all items in a project that are not a bin.
    item: a bin that has items in it
    array: an empty (not required to be empty) array variable to write the items to.
    OUTPUT: (on success) array items are pushed to array variable (on failure) nothing.
*/
function traverseAllItems (item, array) {
    if(item.type === 2) {
        for(var i = 0; i < item.children.numItems; i++){
            traverseAllItems(item.children[i]);
        } 
        } else {
            allItems.push(array);
    }
}
