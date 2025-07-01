
# ## 🧩 **Problem: Generate All Balanced Parentheses**

# ### 🔐 Prompt:

# Write a function that generates **all combinations of `n` pairs of balanced parentheses**.

# ### 🧠 Input:

# * An integer `n` (number of pairs of parentheses)

# ### 📤 Output:

# * A list of strings, each string being a valid combination of `n` pairs of balanced parentheses.

# ---

# ### 🔄 Example:

# ```python
# generate_parentheses(1)
# → ['()']

# generate_parentheses(2)
# → ['(())', '()()']

# generate_parentheses(3)
# → ['((()))', '(()())', '(())()', '()(())', '()()()']
# ```

# ---

# ### 🧠 Core Idea:

# You’ll need to:

# * Track how many `(` and `)` you have used so far.
# * Only add a `(` if you still have left.
# * Only add a `)` if it won’t break the balance (i.e., you’ve added more `(` than `)` so far).

# ---

def generate_parentheses(n):
    def backtrack(current, open_count, close_count):
        if len(current) == 2 * n:
            result.append(current)
            return
        
        if open_count < n:
            backtrack(current + '(', open_count + 1, close_count)
        
        if close_count < open_count:
            backtrack(current + ')', open_count, close_count + 1)

    result = []
    backtrack('', 0, 0)
    print(result)

generate_parentheses(3)

