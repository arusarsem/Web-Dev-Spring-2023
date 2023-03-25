n = int(input())
a = list(map(int, input().split()))
j = n-1
for i in range(0,int((n)/2)):
    a[i],a[j] = a[j],a[i]
    j-=1
for i in a:
    print(i,end=' ')