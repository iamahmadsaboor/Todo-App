// 1. Write a js program to find length of a string.
let askForStr = prompt("Enter To Find The Length of the string");
let strLen = askForStr.length;
alert(`The Length of ${askForStr} is ` + strLen);


// 2. Write a js program to copy one string to another string.

let realStr = prompt("Enter a String")
let sliceStr = realStr.slice();
alert(sliceStr);

// 3. Write a js program to concatenate two strings.
let frstStr = prompt("Enter String One");
let scndStr = prompt("Enter String Two");
// let concatStr = frstStr + scndStr;
let concatStr = scndStr.concat("", frstStr);
alert(concatStr);


// 4. Write a js program to compare two strings.
let matchOne = prompt("Enter Match one String");
let matchTwo = prompt("Enter Match Two String");
let compareStr = matchOne.includes(matchTwo);
console.log(compareStr);


// 5. Write a js program to convert lowercase string to uppercase.
let lowerCase = prompt("Enter in LowerCase");
let upperCase = lowerCase.toUpperCase();
alert(upperCase);


// 6. Write a js program to convert uppercase string to lowercase.
let askUpper = prompt("Enter in UpperCase");
let giveLower = askUpper.toLowerCase();
alert(giveLower);

// 7. Write a js program to toggle case of each character of a string.
let result = ''; // empty declarred so we can add into it
  let str002 = prompt("Enter a String");
  for (let i = 0; i < str002.length; i++) {
    let char = str002.charAt(i); // here will chk which charracter is
    if (char === char.toUpperCase()) { // here will chk if the char is uppercase will enter this block else go to else block
      result += char.toLowerCase(); // if it will upper case than it will convert to lower case and will added to result
    } else {
      result += char.toUpperCase(); //if it is not inn upper case wil be in lower case will convert to uppercase
    }
}
  alert(result)




// 8. Write a js program to find total number of alphabets, digits or special character in a string.
let strOf = prompt("Enter a String");
let total = 0;
for (let i = 0; i < strOf.length; i++) {
    let char = strOf.charAt(i);
    if (char.match(/[a-zA-Z0-9\s]/)) {
        total++;
      }
    }
      alert(total);



// 9. Write a js program to count total number of vowels and consonants in a string.
let str001 = prompt("Enter a String");
let vowels = 0;
let consonants = 0;
for (let i = 0; i < str001.length; i++) {
    let char = str001.charAt(i);
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowels++;
      } else if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
          vowels++;
        } else {
            consonants++;
          }
        }
alert(`The Number of Vowels are`+vowels);
alert(`The Number of Consonents are`+consonants);

// 10. Write a js program to count total number of words in a string.
let strp = prompt("Enter a String");
let totalp = 0;
for (let i = 0; i < strp.length; i++) {
      let char = strp.charAt(i);
    if (char.match(/[a-zA-Z0-9\s]/)) {
          totalp++;
          }
      }
    alert(`The Number of Words are`+totalp);

// 11. Write a js program to find reverse of a string.
let str1 = prompt("Enter a Value For Reverse");
str1.toLowerCase();
let strToArr1 = str1.split('');
let arrToRev1 = strToArr1.reverse();
let strReverse1 = arrToRev1.join('');
console.log(strReverse1)

// 12. Write a js program to check whether a string is palindrome or not.
let str = prompt("Enter a Value For Reverse");
str.toLowerCase();
let strToArr = str.split('');
let arrToRev = strToArr.reverse();
let strReverse = arrToRev.join('');
if (str == strReverse) {
  console.log("It is a palindrome")
}
else {
  console.log("It is not a palindrome")
}


// 14. Write a js program to find first occurrence of a character in a given string.
let whatStr = prompt("Enter a String");
let ofWhich = prompt("of which character first occuurence do you want to know");
let frstOcc=whatStr.indexOf(ofWhich);
alert(frstOcc);


// 15. Write a js program to find last occurrence of a character in a given string.
let whatStr1 = prompt("Enter a String");
let ofWhich1 = prompt("of which character last occuurence do you want to know");
let lastOcc=whatStr1.lastIndexOf(ofWhich1);
alert(lastOcc);

// 16. Write a js program to search all occurrences of a character in given string.
let whatStr2 = prompt("Enter  a String");
let ofWhich2 = prompt("of which character do you want to search");
for (let i = 0; i < whatStr2.length; i++){
    if (whatStr2[i] == ofWhich2) {
       console.log(`We Got ${ofWhich2} at `+ i + ` Index`);
   }
}
// 17. Write a js program to count occurrences of a character in given string.

 let whatStr3 = prompt("Enter  a String");
 let ofWhich3 = prompt("of which character do you want to search");

let count = 0;
for (let i = 0; i < whatStr3.length; i++){
    if (whatStr3[i] == ofWhich3) {
        count++;
        console.log(`We Got ${ofWhich3} at ` + i + ` Index`);
    }
}
console.log(count);
    
// 18. Write a js program to find highest frequency character in a string.
let strq = prompt("Enter a String");
let arr = strq.split('');
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count > max) {
        max = count;
    }
}
prompt("The Most Repeated Letter is "+max);



// 19. Write a js program to find lowest frequency character in a string.


let givStr = prompt("Enter a String");
let giveStr = "Ahmad is a Programmer";
let becArr = giveStr.split('')
console.log(becArr)
let ansMin = becArr[0];
for (let i = 0; i <= becArr.length; i++){
    let ansCount = 0;
    for (let j = 0; j <= becArr.length; j++){
        
        if (becArr[i] == becArr[j]){
            ansCount++
        }
    }
    if (ansCount < ansMin) {
    ansMin=ansCount
    }
}
console.log("The Minimum Repeated Letter is "+ ansMin);

// 21. Write a js program to remove first occurrence of a character from string.
let iamStr = "kdahfokadshfl";
let newStr = iamStr.split('');
let delFo = newStr.shift();
let pq=newStr.join('');
console.log(pq); //k was the first occurence here

// 22. Write a js program to remove last occurrence of a character from string.
let iamStr1 = "kdahfokadshfl";
let newStr1 = iamStr1.split('');
let delFo1 = newStr1.pop();
let pq1=newStr1.join('');
console.log(pq1); //l was the last occurence here



// 23. Write a js program to remove all occurrences of a character from string.

// 35. Write a js program to trim leading white space characters from given string.
let strTrim=prompt("Enter String To Trim")

let trimmed =strTrim.trimStart();
console.log(trimmed);

// 36. Write a js program to trim trailing white space characters from given string.

let strTrim1=prompt("Enter String To Trim")

let trimmed1 =strTrim1.trimEnd();
console.log(trimmed1);

// 37. Write a js program to trim both leading and trailing white space characters from given string.
let str3 = prompt("Enter String To Trim")
let trimm = str3.trim();
console.log(trimm);

// Array Handling

// 1. Write a js program to read and print elements of array.
let read = [2, 8, 4, 7, 8, 5]
for (num in read) {
    console.log(read[num]);
}

// 2. Write a js program to print all negative elements in an array.
let ext = [2, 4, 5, 6, 7, 8, -1, 3, -5, -5]
for (num in ext) {
    if (ext[num] < 0) {
        console.log(ext[num]);
    }
}


// 3. Write a js program to find sum of all array elements.
let arrOne = [2, 3, 4, 5, 6, 1, 2, 3]
let sum = 0;
for (num in arrOne) {
    sum+=arrOne[num]
}
console.log(sum);



// 4. Write a js program to find maximum and minimum element in an array.
let arrTwo=[21,3,4,5,6,7,8]
console.log(Math.max(...arrTwo));


// 5. Write a js program to find second largest element in an array.
let arrThree = [2, 3, 4, 5, 5, 6, 7, 9, 9, 1, 2]
let sortArrthree = arrThree.sort();
console.log(sortArrthree[sortArrthree.length - 2]);

// 6. Write a js program to count total number of even and odd elements in an array.
let arrFour = [2, 3, 4, 5, 6, 22, 34, 32, 2, 3, 4, 5,4]
let evenCount = 0;
let oddCount = 0;
for (num in arrFour) {
    if (arrFour[num] % 2 == 0) {
        evenCount++;
    }
    else {
        oddCount++;
    }
}
console.log("Even are"+evenCount);
console.log("Odd are" + oddCount);


// 7. Write a js program to count total number of negative elements in an array.
let arrFive = [2, 4, 5, 3, 6, 1, 3 - 2, 4 - 23, -43, 123, -234]
let countNegative = 0;
for (num in arrFive) {
    if (arrFive[num] < 0) {
        countNegative++;
    }
}
console.log("The Number of Negaative are--" + countNegative);

// 8. Write a js program to copy all elements from an array to another array.
let arrSix = [2, 3, 4, 5, 6, 1, 2, 3, 5, 55];
let arrSeven=[]
for (num in arrSix) {
    arrSeven.push(arrSix[num]);
}
console.log(arrSeven);

// 9. Write a js program to insert an element in an array.
let arrNine = [2, 3, 4, 5, 1, 21, 3, 21];
arrNine.push(1, 0, 21);
console.log(arrNine)

// 10. Write a js program to delete an element from an array at specified position.
let arrTen = [22, 3, 4, 1, 2, 312]
console.log(arrTen.splice(2, 1)) // delete from second index and only 1 element
console.log(arrTen)


// 11. Write a js program to count frequency of each element in an array.
let arrEleven = [22, 3, 4, 1, 2, 312]

// 12. Write a js program to print all unique elements in the array.
let arrTwelve = [22, 3, 4, 1, 2, 312]


