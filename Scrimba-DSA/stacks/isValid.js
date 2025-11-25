import { stack } from "./index.js"
// Examples:
// **********

// Example 1:
// ```
// exp = <1 + 2> * 5
// valid = true
// ```

// Example 2:
// ```
// exp = <<1 + 2> * 5> + <6 + 7>
// valid = true
// ```

// Example 3:
// ```
// exp = <<1 + 2> * 9
// valid = false
// ```

// Example 4:
// ```
// exp = <1 + 2> * 9>
// valid = false
// ```

// 1. How could you use a stack to see if there was a matching opening bracket for the closing bracket you are currently looking at?
// 2. You only care about the brackets in this question. Ignore everything else: the numbers and the operators.
// 3. If there are still opening brackets in the stack after you go over the entire expression, what does that mean?
// 4. Start by initializing an empty stack.
// 5. Go over each character in the expression.
// 6. If it's an opening bracket, put it in the stack.
// 7. Else if it's a closing bracket, ensure the stack is not empty and peek at the top of the stack 
// to see if there is a matching opening bracket previously seen. If there is one, pop it. If there is not
//  or the stack was empty, return `false`.
// 8. Ignore any character that is neither an opening nor a closing bracket.
// 9. After going over the entire expression, check if the stack is empty.
// 10. If it is empty, then all opening brackets had matching closing brackets. Return `true`.
// 11. If the stack was not empty, that means there were opening brackets left unmatched. Return `false`.


export function isValid(exp) {
    const newStack = new stack()
    
    for(let char of exp) {
    if(char === "<"){
      newStack.push(char)
    }else if (char === ">") {
       if(newStack.isEmpty()) {
          return false
         }
       newStack.pop()
    }
     
   }
   return newStack.isEmpty()
  
}


console.log(isValid("<1 + 2> * 5"));
