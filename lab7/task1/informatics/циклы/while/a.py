import math
n = int(input())
i = 1
while i<=n:
    if int(math.sqrt(i))*int(math.sqrt(i))==i:
        print(i)
    i+=1