### Step-by-Step Plan (No Code)

1. **Make everything lowercase**
   This way “Hello” and “hello” are treated the same.

2. **Remove punctuation**
   Get rid of commas, periods, and exclamation marks so they don’t stick to words.

3. **Split the text into words**
   Break the paragraph into a list/array of words based on spaces.

4. **Count each word’s occurrences**

   * Create a “word counter” object or dictionary.
   * Go through each word:

     * If it already exists in the counter, increase its count by 1.
     * Otherwise, start it at 1.

5. **Sort by count**
   Take all the words with their counts and sort them so the most common ones are first.

6. **Pick the top three words**
   Once it’s sorted, grab the first three and return them (just the words, not the counts).
