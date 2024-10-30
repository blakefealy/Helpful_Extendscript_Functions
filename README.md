# Helpful Extendscript Functions

These Javascript functions are for use in scripting for Adobe products using Extendscript.


## Write All Array
##### Software
#after-effects #premierePro
##### Summary
Function to "$.writeln" all items into the console for a given array.
##### Function Requirements
**array:** the array you want written into the console
**specString:** the specific info you want in string form (i.e. "name" to get array.name)
##### Output
**On Success:** Count of array, array items, end of array message in console.
**On Failure:** Message of failure in console.
```
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


```
---
## Traverse All Project Items
##### Software
#premierePro 
##### Summary
Function to loop through all items in a project that are not a bin.
##### Function Requirements
**item:** a bin that has items in it
**array:** an empty (not required to be empty) array variable to write the items to.
##### Output
**On Success:** array items are pushed to array variable.
**On Failure:** Nothing.
```

function traverseAllItems (item, array) {
    if(item.type === 2) {
        for(var i = 0; i < item.children.numItems; i++){
            traverseAllItems(item.children[i]);
        } 
        } else {
            allItems.push(array);
    }
}


```
---
## Check File(s) Extensions
##### Software
#after-effects #premierePro 
##### Summary
pass a clip through this function and the desired extension and it will return a true or false depending on if the clip's extension matches the desired extension.
##### Function Requirements
**clip:** a clip or array of clips.
**ext:** the desired file extension to check for.
##### Output
**On Success:** Returns a true or false (whether the clip has the desired extension).
**On Failure:** Nothing.
##### Extra Information & Features
- The function simplifies the extensions so both are lowercase and don't have a period, no matter what the user pushes through.
- This function can be used in a for loop for multiple clips and/or multiple extensions.

```

function checkFileExtension (clip, ext){
    var extPrep = ext.toLowerCase();
    var userExt = extPrep;
    var value = null;

    if(extPrep[0] === "."){
        $.writeln("'.' detected in user-defined extension, removing.");
        var mkArray = extPrep.split("");
        var slice = mkArray.slice(1, mkArray.length);
        var join = slice.join("");
        userExt = String(join);
    }
        var name = clip.name.toLowerCase();
        var split = name.split(".");
        var ext = split[1];
        if(ext === userExt){
            
             value = true;
        } else {
            value = false;
        }
        return value;
    }

```

##### Extra
WANT TO LOOP THROUGH AN ARRAY OF CLIPS AND/OR EXTENSIONS?

USE THE FOLLOWING CODE (WITH THE FUNCTION (ABOVE) ALSO IN YOUR CODE) TO LOOP THROUGH ARRAYS
Array for both is possible but not required. Keep array formatting even if there is only one array in formula.

```
clipPathArray = [prjOBJ3, prjOBJ2]; //REPLACE WITH YOUR PROJECT OBJECTS
    var extArray = [".wav", "MP4"]; // REPLACE WITH YOUR EXTENSION (EXTENSIONS WILL BE PARSED INDIVIDUALLY, non-case sensitive, including "." is optional)
    if(clipPathArray.length > 0 && extArray.length > 0){
        var badArray = [];
        for(p = 0; p < clipPathArray.length; p++){
            var clipToCheck = clipPathArray[p];
            var remove = false;
            $.writeln("\n -- START OF NEXT CLIP --: \n Passing '" + clipToCheck.name + "' through function.");
            for(e = 0; e < extArray.length; e++){
                extension = extArray[e];
                //Function is here.
                var result = checkFileExtension(clipToCheck, extension);
                // End of Function.
                $.writeln("function checked for '" + extension + "' and it returned '" + result + "'.");
                if(result === true){
                    remove = true;
                } } 
                //Whether the clip is good or bad, it will push to the bad array and remove it later
                badArray.push(clipToCheck);
                var clipIndex = badArray.indexOf(clipToCheck);
                if(remove === true){
                    badArray.splice(clipIndex, 1);
                
            } }
        } else {
            badArray = [];
            $.writeln("one or both arrays have no value \n clipPathArray has " + clipPathArray.length + " values. \n extArray has " + extArray.length + " values." );
    }
        $.writeln("\n -- END CHECKING ARRAYS -- \n badArray returned with: '" + badArray.length + "' values");
    
```