from selenium import webdriver
from pandas.io.html import read_html
from webdriver_manager.chrome import ChromeDriverManager
import time
import pandas as pd 
import numpy as np 
import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urlparse

os.environ.setdefault('DJANGO_SETTINGS_MODULE',"TransferMarket_Django.settings")
import django
django.setup()
from crawled_data.models import PremierPlayerStatistics
from crawled_data.models import Ligue1PlayerStatistics
from crawled_data.models import LaligaPlayerStatistics
from crawled_data.models import SerieAPlayerStatistics
from crawled_data.models import BundesligaPlayerStatistics
from crawled_data.models import PlayerStatistics


# 셀레니움의 가상 브라우저를 열고 원하는 사이트로 접속하는 과정
# 가상 브라우저는 크롬을 사용
# chromedriver를 다운받아야 한다.

# playerStatic 
def getPlayerStatistics(url,sleep_time):
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver = webdriver.Chrome('/Users/범석/Documents/chromedriver')
    # driver=webdriver.Chrome(chrome_driver)
    driver.implicitly_wait(3)
    driver.get(url)

    # 최소 경기 뛴 선수들만
    # time.sleep(sleep_time)
    # Minimum_apps = driver.find_element_by_link_text('Minimum apps')
    # Minimum_apps.click()

    time.sleep(sleep_time)
   

    lastPages=5
    df_playerStatistics=pd.DataFrame(columns=[
        'Player','Player.1','Apps','Goals','Assists','MotM','Rating'
    ])

    #crawling the table
    for i in np.arange(lastPages)+1 :
        time.sleep(sleep_time)
        table = driver.find_element_by_xpath('//*[@id="statistics-table-summary"]')
        table_html= table.get_attribute('innerHTML')
        df2 = read_html(table_html)[0]
        df_playerStatistics = pd.concat([df_playerStatistics, df2], axis=0)
        driver.find_element_by_link_text('next').click()
    

    return(df_playerStatistics)



# url='https://1xbet.whoscored.com/Statistics'
# 프리미어 리그 / 라리가 / 분데스리가 / 세리에 / 리그
urls=[
    'https://1xbet.whoscored.com/Regions/252/Tournaments/2/Seasons/8228/Stages/18685/PlayerStatistics/England-Premier-League-2020-2021',
    'https://1xbet.whoscored.com/Regions/206/Tournaments/4/Seasons/8321/Stages/18851/PlayerStatistics/Spain-LaLiga-2020-2021',
    'https://1xbet.whoscored.com/Regions/81/Tournaments/3/Seasons/8279/Stages/18762/PlayerStatistics/Germany-Bundesliga-2020-2021',
    'https://1xbet.whoscored.com/Regions/108/Tournaments/5/Seasons/8330/Stages/18873/PlayerStatistics/Italy-Serie-A-2020-2021',
    'https://1xbet.whoscored.com/Regions/74/Tournaments/22/Seasons/8185/Stages/18594/PlayerStatistics/France-Ligue-1-2020-2021'
]

def addPlayerStats(playerStatistics):
    print("!!!!")
   
    for item in playerStatistics:
        print("new item added!" + item['name'])
        print(item)
        # PlayerStatistics(
        #     League=item['League'],
        #     specific_id=item['specific_id'],
        #     name= item['name'],
        #     age= item['age'],
        #     position= item['position'],
        #     Games= item['Apps'],
        #     Goals= item['Goals'],
        #     Assists= item['Assists'],
        #     SpG= item['SpG'],
        #     PS= item['PS%'],
        #     MotM= item['MotM'],
        #     Rating= item['Rating']
        # ).save()
    
    # return addItems

def addPremier(playerStatistics):
    print("!!!!")
    last_inserted_items=PremierPlayerStatistics.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in playerStatistics:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # print(addItems)
    # addItems.reverse()

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        PremierPlayerStatistics(
            specific_id=item['specific_id'],
            name= item['name'],
            age= item['age'],
            position= item['position'],
            Games= item['Apps'],
            Goals= item['Goals'],
            Assists= item['Assists'],
            SpG= item['SpG'],
            PS= item['PS%'],
            MotM= item['MotM'],
            Rating= item['Rating']
        ).save()
    
    return addItems

def addLaliga(playerStatistics):
    last_inserted_items=LaligaPlayerStatistics.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in playerStatistics:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        LaligaPlayerStatistics(
            specific_id=item['specific_id'],
            name= item['name'],
            age= item['age'],
            position= item['position'],
            Games= item['Apps'],
            Goals= item['Goals'],
            Assists= item['Assists'],
            SpG= item['SpG'],
            PS= item['PS%'],
            MotM= item['MotM'],
            Rating= item['Rating']
        ).save()
    
    return addItems
def addBundesliga(playerStatistics):
    last_inserted_items=BundesligaPlayerStatistics.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in playerStatistics:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        BundesligaPlayerStatistics(
            specific_id=item['specific_id'],
            name= item['name'],
            age= item['age'],
            position= item['position'],
            Games= item['Apps'],
            Goals= item['Goals'],
            Assists= item['Assists'],
            SpG= item['SpG'],
            PS= item['PS%'],
            MotM= item['MotM'],
            Rating= item['Rating']
        ).save()
    
    return addItems

def addSerieA(playerStatistics):
    last_inserted_items=SerieAPlayerStatistics.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in playerStatistics:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        SerieAPlayerStatistics(
            specific_id=item['specific_id'],
            name= item['name'],
            age= item['age'],
            position= item['position'],
            Games= item['Apps'],
            Goals= item['Goals'],
            Assists= item['Assists'],
            SpG= item['SpG'],
            PS= item['PS%'],
            MotM= item['MotM'],
            Rating= item['Rating']
        ).save()
    
    return addItems
def addLigue1(playerStatistics):
    last_inserted_items=Ligue1PlayerStatistics.objects.last()
    if last_inserted_items is None:
        last_inserted_specific_id=""
    else:
        last_inserted_specific_id=getattr(last_inserted_items,'specific_id')

    addItems=[]
    for item in playerStatistics:
        if item['specific_id']==last_inserted_specific_id:
            break
        addItems.append(item)
    
    # addItems.reverse()

    for item in addItems:
        print("new item added!" + item['name'])
        print(item)
        Ligue1PlayerStatistics(
            specific_id=item['specific_id'],
            name= item['name'],
            age= item['age'],
            position= item['position'],
            Games= item['Apps'],
            Goals= item['Goals'],
            Assists= item['Assists'],
            SpG= item['SpG'],
            PS= item['PS%'],
            MotM= item['MotM'],
            Rating= item['Rating']
        ).save()
    
    return addItems

print(urls[0])
# print(urls[1])
for i in range(0,5):
    url=urls[i]
    df = getPlayerStatistics(url,3)

    df = df.reset_index()
    df.drop(['index', 'Player'], axis=1, inplace=True)
    spl= df['Player.1'].str.split(',')
    name=[]
    age=[]
    position=[]

    for j in range(len(spl)):
        _name=spl[j][0]
        name.append(_name)
    df['name']=name

    for z in range(len(spl)):
        _age = int(spl[z][1])
        age.append(_age)
    df['age']=age

    for k in range(len(spl)):
        if len(spl[k])>3 :
            _position = spl[k][2]+" · "+spl[k][3]
        else:
            _position = spl[k][2]
        position.append(_position)

    df['position']=position
    # df['specific_id']=name
 
    # print(df['name'])
    stat=[]
    if i==0 :
        league="premier"
    elif i==1 :
        league="laliga"
    elif i==2:
        league="bundesliga"
    elif i==3:
        league="seriea"
    elif i==4:
        league="ligue1"
    for j in range(0,50):
        addStat={
            'League':league,
            'specific_id':j,
            'name':df['name'][j],
            'age':df['age'][j],
            'position':df['position'][j],
            'Apps':df['Apps'][j],
            'Goals':df['Goals'][j],
            'Assists':df['Assists'][j],
            'SpG':df['SpG'][j],
            'PS%':df['PS%'][j],
            'MotM':df['MotM'][j],
            'Rating':df['Rating'][j]
        }
        stat.append(addStat)
        # print(df['name'][i])

    
    time.sleep(5)
    addPlayerStats(stat)

    # print("i" , i)
    # if i==0 :
    #     addPremier(stat)
    # elif i==1 :
    #     addLaliga(stat)
    # elif i==2:
    #     addBundesliga(stat)
    # elif i==3:
    #     addSerieA(stat)
    # elif i==4:
    #     addLigue1(stat)
    # print(df)


