# def countdown(i):
#     print(i)
#     countdown(i-1)

def countdown(i):
    print(i)
    if i<=1:
        return
    else:
         countdown(i-1)
    countdown(i-1)
countdown(3)