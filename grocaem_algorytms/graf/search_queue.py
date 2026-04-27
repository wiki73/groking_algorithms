import time
from collections import deque

# 1. ПОДГОТОВКА ГРАФА
graph = {}
graph["вы"] = ["Алиса", "Боб", "Клер"]
graph["Алиса"] = ["Пегги"]
graph["Боб"] = ["Анудж", "Пегги"]
graph["Клер"] = ["Том", "Джонни"]
# Добавляем пустые списки, чтобы не было ошибок KeyError
graph["Пегги"] = []
graph["Анудж"] = []
graph["Том"] = []
graph["Джонни"] = ["Артемm"] # Продавец манго (заканчивается на 'm')
graph["Артем"] = []

def person_is_seller(name):
    return name[-1] == 'm'

# 2. ВАШ АЛГОРИТМ (BFS - Поиск в ширину)
# Находит ближайшего к вам продавца
def search_bfs(graph):
    search_queue = deque(graph["вы"])
    searched = set() # Список уже проверенных людей
    while search_queue:
        person = search_queue.popleft()
        if person not in searched:
            if person_is_seller(person):
                return True
            search_queue += graph.get(person, [])
            searched.add(person)
    return False

# 3. АЛЬТЕРНАТИВА (DFS - Поиск в глубину)
# Идет вглубь по одной ветке связей
def search_dfs(graph):
    stack = list(graph["вы"])
    searched = set()
    while stack:
        person = stack.pop() # Забираем последнего (LIFO)
        if person not in searched:
            if person_is_seller(person):
                return True
            stack += graph.get(person, [])
            searched.add(person)
    return False

# 4. СРАВНЕНИЕ СКОРОСТИ
def compare_speed():
    iterations = 100000
    
    # Тест BFS
    start = time.perf_counter()
    for _ in range(iterations):
        search_bfs(graph)
    bfs_time = time.perf_counter() - start
    
    # Тест DFS
    start = time.perf_counter()
    for _ in range(iterations):
        search_dfs(graph)
    dfs_time = time.perf_counter() - start
    
    print(f"Результат BFS: {bfs_time:.4f} сек за {iterations} итераций")
    print(f"Результат DFS: {dfs_time:.4f} сек за {iterations} итераций")

if __name__ == "__main__":
    # Проверка работы
    found = search_bfs(graph)
    print(f"Продавец найден? {'Да' if found else 'Нет'}")
    
    # Замер скорости
    print("-" * 30)
    compare_speed()
