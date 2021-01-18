from fastapi import FastAPI,Body,  Request, File, UploadFile, BackgroundTasks, Form
from fastapi.templating import Jinja2Templates
import shutil
import os
import json
from csv import writer
from datetime import  datetime
from typing import Optional, List
import shutil


app = FastAPI()


templates = Jinja2Templates(directory="templates")

@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/to-markdown.js")
def markdown(request: Request):
    return templates.TemplateResponse("to-markdown.js", {"request": request})

@app.get("/copytomarkdown")
def originalmarkdown(request: Request):
    return templates.TemplateResponse("copytomarkdown.html", {"request": request})


@app.get("/Copy2Markdown.js")
def copytomarkdown(request: Request):
    return templates.TemplateResponse("Copy2Markdown.js", {"request": request})


@app.get("/createcategory")
def createcategory(request: Request):
    return templates.TemplateResponse("CreateCategory.html", {"request": request})


@app.post("/createcategory")
def createcategorypost(request: Request, Category: str = Form(...)):
    with open("postCatgories.csv", 'a+', newline='') as write_obj:
        csv_writer = writer(write_obj)
        csv_writer.writerow([Category])
    os.mkdir(f"./data/{Category}")
    return templates.TemplateResponse("CreateCategory.html", {"request": request, "success" : True})

@app.get("/createpost")
def Post(request: Request):
    dirs = os.listdir("./data")
    return templates.TemplateResponse("Createpost.html", {"request": request, "dirs":dirs})

@app.post("/createpost")
async def createHome(request: Request, title: str = Form(...), content: str = Form(...),category: str = Form(...),file: UploadFile = File(...) ):
    path = f"./data/{category}/{title}"

    if not os.path.isdir(path):    
        os.mkdir(path)
        Content = f"""---
date: {datetime.now().strftime("%Y-%m-%d")}
title: {title}
tags: ['css', 'resource']
private: false
featureImage: ./{file.filename}
category: {category}
feature: false
---
""" + content
        with open(f"{path}/post.mdx", "a", newline="" ,encoding="utf-8") as mardown:
            mardown.write(Content)
    
    with open(f"{path}/{file.filename}",'wb+') as f:
        f.write(file.file.read())
        f.close()
    return templates.TemplateResponse("Createpost.html", {"request": request, "success" : True})



@app.get("/detelepost")
def Listofpost(request: Request):
    dirs = os.listdir("./data")
    maps = {}
    for i in dirs:
        maps[i] = os.listdir(f"./data/{i}")
    return templates.TemplateResponse("DeletePost.html", {"request": request,  "allpost": maps})


@app.post("/detelepost")
def DeletePost(request: Request, detelepost: str = Form(...)):

    print(detelepost)
    filearr = detelepost.replace("('", '').replace("'", "").replace(")","").split(",")
    print(filearr)
    path = f"./data/{filearr[1]}/{filearr[0]}".replace("/ ", "/")

    try: 
        shutil.rmtree(path)
        print("Directory '% s' has been removed successfully" % path) 
    except OSError as error: 
        print(error) 
        print("Directory '% s' can not be removed" % path) 

    dirs = os.listdir("./data")
    maps = {}
    for i in dirs:
        maps[i] = os.listdir(f"./data/{i}")
    return templates.TemplateResponse("DeletePost.html", {"request": request, "success" : True, "result" :detelepost, "allpost": maps})

@app.post("/updatepost")
def udatepost(request: Request,  detelepost: str = Form(...)):
    dirs = os.listdir("./data")
    filearr = detelepost.replace("(", '').replace("'", "").replace(")","").split(",")
    path = f"./data/{filearr[1]}/{filearr[0]}/post.mdx".replace("/ ", "/")
    with open(path,encoding="utf-8") as f:
        featureImage = "".join(f.readlines()[5])[14:].replace("./", "")
    with open(path,encoding="utf-8") as f:
        content = "".join(f.readlines()[9:])
    print(featureImage)
    categorySelect = filearr[1]
    title = filearr[0]
    return templates.TemplateResponse("UpdatePost.html", {"request": request, "content" :content,"categorySelect" :categorySelect,"title" :title, "dirs":dirs, "featureImage":featureImage})

@app.post("/Updatedpost")
async def UpdatedPost(request: Request, title: str = Form(...), content: str = Form(...),category: str = Form(...),file: UploadFile = File(...), featureimage: str = Form(...)):
    path = f"./data/{category}/{title}"

    fileimage = file.file.read()
    print("here", fileimage!= b'')
    dirs = os.listdir("./data")
    maps = {}
    for i in dirs:
        maps[i] = os.listdir(f"./data/{i}")

    filename = ""

    print(fileimage != b'')


    if fileimage != b'':
        filename= file.filename
    else: 
        filename = featureimage


    Content = f"""---
date: {datetime.now().strftime("%Y-%m-%d")}
title: {title}
tags: ['css', 'resource']
private: false
featureImage: ./{filename}
category: {category}
feature: false
---
""" + content

    with open(f"{path}/post.mdx", "w" ,  newline='' ,encoding="utf-8") as mardown:
        mardown.write(Content)

    if fileimage!= b'':
        with open(f"{path}/{file.filename}",'wb+') as f:
            f.write(fileimage)
            f.close()
    return templates.TemplateResponse("DeletePost.html", {"request": request, "successPost" : True,"allpost": maps})




