
from collections import deque


if __name__=="__main__":
    input="123R456"
    
    ans=deque([])
    r= len(input)//2 if len(input)%2==0 else len(input)//2+1
    for i in range(r):
        left=input[i]
        if (len(input)-1-i)==i:
            right=""
        else:
            right=input[len(input)-1-i]
        ans.append((left,right))
        
    print(ans)