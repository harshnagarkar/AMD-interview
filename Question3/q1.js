const productRankings=[
    {"name":"AMD_Product-A","rank":1},
    {"name":"AMD_Product-B","rank":10},
    {"name":"AMD_Product-C","rank":2},
    {"name":"AMD_Product-X","rank":4}]


compare=(a, b)=> {
    if (a["rank"]>b["rank"]) {
        return -1;
    }
    if (a["rank"]<b["rank"]) {
        return 1;
    }
    return 0;
    }
productRankings.sort(compare)

let count_requested=2
productRankings.slice(0,count_requested)

names=[]



productRankings.forEach(element => {
    names.push(element["name"])
});

let key="top"+count_requested
let ans={}
ans[key]=names.slice(0,count_requested)
console.log(JSON.stringify(ans))