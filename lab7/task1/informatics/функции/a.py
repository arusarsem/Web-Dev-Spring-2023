def min(a,b,c,d):
    if a<=b and a<=c and a<=d:
        return a
    if b<=a and b<=c and b<=d:
        return b
    if c<=a and c<=b and c<=d:
        return c
    if d<=a and d<=b and d<=c:
        return d
    if a==b and b==c and c==d:
        return a
n = list(map(int, input().split()))
a = n[0]
b = n[1]
c = n[2]
d = n[3]
print(min(a,b,c,d))