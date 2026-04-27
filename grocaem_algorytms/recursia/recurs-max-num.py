def rescursMaxNum(arr, maxNum):
    if len(arr) == 0:
        return maxNum
    else:
        if arr[0] > maxNum:
            return rescursMaxNum(arr[1:], arr[0])
        else:
            return rescursMaxNum(arr[1:], maxNum)


print(rescursMaxNum([7,2,3,4,5], 1))
            