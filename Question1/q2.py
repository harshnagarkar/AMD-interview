import collections
from concurrent.futures import process
import json



if __name__=="__main__":
    data={
        "Input":{
            "superheros": [
                { "name": "batman", "id": 1, "city": "gotham" },
                { "name": "spiderman", "id": 2, "city": "NYC" },
                { "name": "superman", "id": 2, "city": "NYC" }
            ]
        }
    }

    res = json.dumps( data )

    data=data["Input"]

    ans={}

    process_data=None
    process_name=None
    for k,v in data.items():
        process_data=v
        process_name=k
        
    ans_data=collections.defaultdict(list)
    for idx,items in enumerate(process_data):
        ans_data[process_data[idx]["city"]].append(process_data[idx]["name"])
        
    ans[process_name]=ans_data

    print(json.dumps(ans))

# ans[data[0]]=data["superheros"]


