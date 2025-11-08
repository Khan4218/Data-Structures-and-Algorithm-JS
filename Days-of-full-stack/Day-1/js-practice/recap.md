1. Hoisting

During code compilation, JavaScript moves declarations (not assignments) to the top of their scope.

var → hoisted and initialized to undefined

let / const → hoisted but left uninitialized (Temporal Dead Zone → ReferenceError if accessed early)

2. Scope
| Type     | Keyword Example                           | Visible In               | Notes                        |
| -------- | ----------------------------------------- | ------------------------ | ---------------------------- |
| Global   | declared outside any function             | everywhere               | avoid polluting              |
| Function | inside a function using `var`             | within the same function | hidden from outside          |
| Block    | declared with `let` / `const` inside `{}` | only in that block       | used in loops, if statements |

3. Closures

A closure is a function that remembers variables from its parent scope even after the parent has finished running.

Key use cases:

Data privacy (bank account example)

State maintenance (counter)

Async behavior (setTimeout loops)

Performance optimization (debounce/throttle)

4. Real-world application you built

Counter with reset → private state using closure.

Debounce → prevents multiple rapid executions (e.g., API calls when typing).

5. Takeaway

You can now:

Explain and visualize hoisting

Predict variable visibility correctly

Create and use closures confidently

Handle async timing with clear logic

That’s everything strong React and Node developers rely on daily.