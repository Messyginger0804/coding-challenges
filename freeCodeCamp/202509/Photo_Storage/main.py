# Photo Storage
# Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:

# 1 gigabyte equals 1000 megabytes.
# Return the number of whole photos the drive can store.

def number_of_photos(photo_size_mb, drive_size_gb):
    a = drive_size_gb * 1000
    b = a / photo_size_mb    

    answer = int(b)
    print(answer)

    return answer

number_of_photos(1, 1)