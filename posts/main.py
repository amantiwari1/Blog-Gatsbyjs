from fastapi import FastAPI,Body,  Request, File, UploadFile, BackgroundTasks, Form
from fastapi.templating import Jinja2Templates
import shutil
import os
import json
from csv import writer
from datetime import  datetime
from typing import Optional, List
import shutil
import pandas as pd
import requests
from scrapy import Selector
import re



def getdata(url, coupon=""):
  if url[:21] in "https://www.udemy.com":
    data = requests.get(url).content
    sel = Selector(text = data)
    description = sel.css("div.ud-component--course-landing-page-udlite--description").extract()
    TAG_RE = re.compile(r'<button .+>.+button>')
    title = sel.css("h1 ::text").extract()[0]
    descriptionclean = TAG_RE.sub('', description[0]).replace('style="max-height:221px"',"")
    category = sel.css("a.udlite-heading-sm:nth-of-type(2) ::text").extract()[0]
    imagefile = sel.xpath("//meta[@property='og:image']/@content").extract()[0]
    date = datetime.now().strftime("%Y-%m-%d")
    data = {
        "title": title.replace("\n",""),
        "category": category,
        "date": date,
        "course_url":url,
        "coupon":coupon,
        "featureimage": imagefile,
        "description": descriptionclean,
    }
    return data
  return "None"




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




@app.get("/listofcourse")
def listofcourse(request: Request):
    data = pd.read_csv("./courses/Course.csv")
    return templates.TemplateResponse("listofcourse.html", {"request": request,"alltitle": data["title"]})

@app.post("/listofcourse")
def delete(request: Request, title : str = Form(...)):
    path = "./courses/Course.csv"
    data = pd.read_csv(path)
    index = data[data['title'] == title].index
    data.drop(index, inplace=True)
    data.to_csv(path, header = True, index = False)
    return templates.TemplateResponse("listofcourse.html", {"request": request,"alltitle": data["title"]})


@app.post("/createcourese")
async def createcourse(request:Request, url: str = Form(...)):
    path = "./courses/Course.csv"
    df = pd.read_csv(path)
    data =  getdata(url)
    df2 = pd.DataFrame([[data["title"], data['category'], data['date'], data['coupon'], data['course_url'], data['featureimage'], data['description']] ], columns = df.columns)
    df2.to_csv(path, mode = 'a', header = False, index = False)
    df = pd.read_csv(path)


    return templates.TemplateResponse("listofcourse.html", {"request": request,"alltitle": df["title"]})


    







