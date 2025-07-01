# In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

# Create as many "shufflings" as you can!

# Examples:

# With input 'a':
# Your function should return: ['a']

# With input 'ab':
# Your function should return ['ab', 'ba']

# With input 'abc':
# Your function should return ['abc','acb','bac','bca','cab','cba']

# With input 'aabb':
# Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

# def permutations(s):
#     if len(s) == 1:
#         return [s]
    
#     result = set()

#     for i in range(len(s)):
#         fixed = s[i]
#         rest = s[:i] + s[i+1:]
#         print(rest)

#         for p in permutations(rest):
#             print(p)
#             result.add(fixed + p)

#     return list(result)

# permutations('aabb')

def permutations(s):
    if len(s) == 1:
        print(f"Base case reached with '{s}' → returning ['{s}']")
        return [s]
    
    result = set()
    print(f"\n🔁 Starting permutations('{s}')")

    for i in range(len(s)):
        fixed = s[i]
        rest = s[:i] + s[i+1:]
        print(f"👉 Fixing '{fixed}' (index {i}), remaining: '{rest}'")

        for p in permutations(rest):
            combined = fixed + p
            print(f"   🔄 Combining fixed '{fixed}' + permutation '{p}' → '{combined}'")
            result.add(combined)

    print(f"✅ All unique permutations of '{s}': {result}")
    return list(result)

permutations('aabb')