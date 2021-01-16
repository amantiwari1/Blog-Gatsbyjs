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
    with open(f"{path}/post.mdx", "a" ,encoding="utf-8") as mardown:
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
    return templates.TemplateResponse("Listofpost.html", {"request": request,  "allpost": maps})


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
    return templates.TemplateResponse("Listofpost.html", {"request": request, "success" : True, "result" :detelepost, "allpost": maps})
