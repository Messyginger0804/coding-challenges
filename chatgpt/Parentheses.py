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
