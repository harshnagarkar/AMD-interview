const d1 = [1, 2, 3];
const d2 = [4, 5, 6];
const d3 = [7, 8, 9, 11, 12, 13, 15];
const data=[d1,d2,d3]

function transform(data) {
    let ans=[]
    let lengths=[]
    for(i=0;i<data.length;i++){
        lengths.push(data[i].length)
    }
    
    
    let max_size=Math.max(...lengths)
    let min_size=Math.min(...lengths)
    // let min_size=Math.min(...length)
    for(let i=0;i<max_size;i++){
        for(let j=0;j<data.length;j++){
            if(ans[i]==undefined){
                ans[i]=[]
            }
            ans[i].push(data[j][i])
        }
    }

    for(let n=0;n<ans.length;n++){
        console.log(ans[n])
    }
}

transform(data)