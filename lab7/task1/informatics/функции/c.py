def xor(x,y):
    return x^y

n = list(map(int, input().split()))

x = n[0]
y = n[1]
print(xor(x,y))