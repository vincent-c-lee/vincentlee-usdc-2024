/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    // arr will hold each individual word of a line
    // resultObj will hold the result object that would be pushed in Results if term is found
    // temp will hold the edited string from the original scannedTextObject.Content
    var arr,resultObj,temp;
    for(b=0;b<scannedTextObj.length;b++){
        for(i=0;i<scannedTextObj[b].Content.length;i++){
            temp = scannedTextObj[b].Content[i].Text.replaceAll(".",""),
            temp = temp.replaceAll(",",""),
            temp = temp.replaceAll(";",""),
            temp = temp.replaceAll("-",""),
            temp = temp.replaceAll("\"",""),
            
            arr = temp.split(" ");
            for(j=0;j<arr.length;j++){
                
                if(arr[j].trim() === searchTerm){
                    resultObj = {
                        "ISBN":scannedTextObj[b].ISBN,
                        "Page":scannedTextObj[b].Content[i].Page,
                        "Line":scannedTextObj[b].Content[i].Line
                    }
                    result["Results"].push(resultObj);
                }
    
            }
    
        };

    }
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


/** Writing my own personal tests with own input*/  
const testIn = [
    {
        "Title": "First Book",
        "ISBN": "111",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "   horse went to play in New York City  or something. I for-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "got about the meat in the fridge. .period"
            },
            
        ] 
    },
    {
        "Title": "Second Book",
        "ISBN": "222",
        "Content": [
            {
                "Page": 50,
                "Line": 10,
                "Text": "Supercalifragilisticexpialidocious horse city"
            },
            {
                "Page": 50,
                "Line": 11,
                "Text": "\'Super\' should not be found in this book"
            },
            
        ] 
    }
]
/** Example output objects */
const testOut = {
    "SearchTerm": "horse",
    "Results": [
        {
            "ISBN": "111",
            "Page": 31,
            "Line": 8
        },
        {
            "ISBN": "222",
            "Page": 50,
            "Line": 10
        }
    ]
}
const testOut2 = {
    "SearchTerm": "city",
    "Results": [
        {
            "ISBN": "222",
            "Page": 50,
            "Line": 10
        }
    ]
}
const testOut3 = {
    "SearchTerm": "period",
    "Results": [
        {
            "ISBN": "111",
            "Page": 31,
            "Line": 9
        }
    ]
}

console.log("\nPersonal Unit Tests\n");

const test3result = findSearchTermInBooks("horse", testIn);
if (JSON.stringify(testOut) === JSON.stringify(test3result)) {
    console.log("PASS: Positive Unit Test");
} else {
    console.log("FAIL: Positive Unit Test");
    console.log("Expected:", testOut);
    console.log("Received:", test3result);
}

const test4result = findSearchTermInBooks("Super", testIn);
if (test4result.Results.length == 0) {
    console.log("PASS: Negative Unit Test");
} else {
    console.log("FAIL: Negative Unit Test");
    console.log("Expected:", 0);
    console.log("Received:", test4result.Results.length);
}

const test5result = findSearchTermInBooks("city", testIn);
if (JSON.stringify(testOut2) === JSON.stringify(test5result)) {
    console.log("PASS: Case-Sensitive Unit Test");
} else {
    console.log("FAIL: Case-Sensitive Unit Test");
    console.log("Expected:", testOut2);
    console.log("Received:", test5result);
}

const test6result = findSearchTermInBooks("period", testIn);
if (JSON.stringify(testOut3) === JSON.stringify(test6result)) {
    console.log("PASS: Punctuation Unit Test");
} else {
    console.log("FAIL: Punctuation Unit Test");
    console.log("Expected:", testOut3);
    console.log("Received:", test6result);
}