def counter(arr):
    if not arr:
        return 0
    else:
        return 1 + counter(arr[1:])
    

print(counter([1,1,1,1,1,1,1]))