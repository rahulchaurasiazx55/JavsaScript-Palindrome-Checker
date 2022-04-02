function Palindrome(myString) {
    const mytext=myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    const mytext2=mytext.split('').reverse().join('');
    if(mytext===mytext2)
    {
        document.write("<div>"+ mytext +" is a palindrome <div>");
    }
    else{
        document.write("<div>"+ mytext +" is not a palindrome <div>");
    }   
}
Palindrome("MADAM");
Palindrome("RAHUL");
Palindrome("ABCBA");