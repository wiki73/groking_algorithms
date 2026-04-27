import time
import random
import sys

sys.setrecursionlimit(10000)

def quick_sort(arr):
    if len(arr) < 2:
        return arr
    pivot = arr[0]
    less = [i for i in arr[1:] if i <= pivot]
    greater = [i for i in arr[1:] if i > pivot]
    return quick_sort(less) + [pivot] + quick_sort(greater)

# 2. Медленная сортировка (Пузырек)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

data = [random.randint(0, 10000) for _ in range(1000000)]

print(f"Сортируем {len(data)} элементов...\n")

start = time.time()
quick_sort(data.copy())
print(f"QuickSort справился за: {time.time() - start:.4f} сек")

start = time.time()
bubble_sort(data.copy())
print(f"Bubble Sort справился за: {time.time() - start:.4f} сек")
