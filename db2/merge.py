import json



def nameInMerged(element,merged):
    inside_merged=False
    for merged_element in merged["elements"]:
       if  merged_element["text"] == element["text"]:
         return True
    return False



def merge_and_sort_jsons(json1, json2):
    merged_json = {"elements": [],"recipes":{}}

    # Merge elements without duplicates
    for element in json1["elements"]:
        if  not nameInMerged(element,merged_json):
            merged_json["elements"].append(element)
            
    for element in json2["elements"]:
        if  not nameInMerged(element,merged_json):
            merged_json["elements"].append(element)

            
    if  "recipes" in json1:       
     for k,v in json1["recipes"].items():
        if k not in merged_json["recipes"].keys():
            merged_json["recipes"].update({k:v})
            
    if  "recipes" in json2:
      for k,v in json2["recipes"].items():
         if k not in merged_json["recipes"].keys():
             merged_json["recipes"].update({k:v})     
            
            

    # Sort elements by the "text" field in ascending order
    # Comment next line if you dont want to rearrange elements in alphabetical order
    # merged_json["elements"] = sorted(merged_json["elements"], key=lambda x: x.get("text", ""))

    return merged_json

with open('json1.json', 'r', encoding="utf8") as file1, open('json2.json', 'r',encoding="utf8") as file2:
    json1 = json.load(file1)
    json2 = json.load(file2)

# Merge and sort the JSONs
merged_json = merge_and_sort_jsons(json1, json2)
print("done till here")


print(json.dumps(merged_json, ensure_ascii=False))

print("that thing")

with open('import.json', 'w',encoding="utf8") as output_file:
    js_code = f'{json.dumps(merged_json, ensure_ascii=False)}'
    output_file.write(js_code)

print("Javascript code to paste on terminal saved in 'import.js'")
