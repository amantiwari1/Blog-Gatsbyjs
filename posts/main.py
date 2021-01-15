from fastapi import FastAPI,Body,  Request, File, UploadFile, BackgroundTasks, Form
from fastapi.templating import Jinja2Templates
import shutil
import os
import json
from pydantic import BaseModel
from csv import writer
from datetime import  datetime
from typing import Optional

app = FastAPI()

class Item(BaseModel):
    title: str
    cateogry: str
    content: str
    

templates = Jinja2Templates(directory="templates")

@app.get("/")
def home(request: Request):
    dirs = os.listdir("./data")
    return templates.TemplateResponse("index.html", {"request": request, "dirs":dirs})

@app.post("/")
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
    return templates.TemplateResponse("index.html", {"request": request, "success" : "successful!!!"})


@app.get("/category")
def category():
    dirs = os.listdir("./data")
    return dirs


@app.get("/createcategory")
def CreateCategory(category: str):
    with open("postCatgories.csv", 'a+', newline='') as write_obj:
        csv_writer = writer(write_obj)
        csv_writer.writerow([category])
    os.mkdir(f"./data/{category}")
    return "success"


@app.get("/scripts.js")
def script(request: Request):
    return templates.TemplateResponse("scripts.js", {"request": request})

@app.get("/listofpost")
def Listofpost():
    dirs = os.listdir("./data/devops")
    return dirs

