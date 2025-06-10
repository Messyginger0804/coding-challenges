def domain_name(url):
    if url.startswith("https://www."):
        startIndex = 12
    elif url.startswith("http://www."):
        startIndex = 11
    elif url.startswith("http://"):
        startIndex = 7
    elif url.startswith("https://"):
        startIndex = 8
    else:
        startIndex = 0

    endIndex = url.find(".", startIndex)

    answer = url[startIndex:endIndex]
                 
    print(answer)

domain_name(url = "https://www.github.com")
