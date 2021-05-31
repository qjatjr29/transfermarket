from django.db import connection
from django.db.models.query import QuerySet
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from django.utils import timezone
from rest_framework import generics, serializers
from rest_framework import viewsets
from .serializers import ValueSerializer


from .models import PlayerValue
from .models import ClubValue
from .models import ClubStatistics
from .models import PlayerStatistics
# Create your views here.


class Player_Value(generics.ListCreateAPIView):
    # 장고 쿼리셋 사용   
    # def get(self,request,_position):
    #     position_data=PlayerValue.objects.filter(_position=_position).values()
    #     # return HttpResponse(position_data)
    #     return JsonResponse(list(position_data),safe=False)

    # sql문 사용
    def get(self,request,_position):
        results=[]
        try:
            cursor=connection.cursor()
            strSql=f"SELECT * FROM crawled_data_playervalue WHERE _position='{_position}';"
            cursor.execute(strSql)
            datas=cursor.fetchall()
        
            for data in datas:
                item={
                    'id':data[0],
                    'specific_id':data[1],
                    '_position':data[2],
                    'ranking':data[3],
                    'player_image':data[4],
                    'name':data[5],
                    'position':data[6],
                    'age':data[7], 
                    'value':data[8], 
                }
                results.append(item);

            connection.commit()
            connection.close()
        except:
            connection.rollback()
            print("Failed")
        
        return JsonResponse(list(results),safe=False)

class Club_Value(generics.ListCreateAPIView):
    # 쿼리셋 사용
    # serializer_class=ValueSerializer    
    # queryset=ClubValue.objects.all()


    # def get(self):
    #     data=ClubValue.objects.all()
    #     # return HttpResponse(position_data)
    #     return JsonResponse(list(data),safe=False)

    # sql문 사용
    def get(self,request):
        results=[]
        try:
            cursor=connection.cursor()
            strSql=f"SELECT * FROM crawled_data_clubvalue;"
            cursor.execute(strSql)
            datas=cursor.fetchall()
          
            for data in datas:
                item={
                    'id':data[0],
                    'specific_id':data[1],
                    'ranking':data[2],
                    'club_image':data[3],
                    'name':data[4],
                    'Competition':data[5],
                    'value':data[6],
                    
                }
                results.append(item);

            connection.commit()
            connection.close()
        except:
            connection.rollback()
            print("Failed")
        
        return JsonResponse(list(results),safe=False)

class Club_Statistics(generics.ListCreateAPIView):
    # 장고 쿼리셋 
    # def get(self,request,League):
    #     data=ClubStatistics.objects.filter(League=League).values()
    #     # return HttpResponse(position_data)
    #     return JsonResponse(list(data),safe=False)
    
    # sql문 사용
    def get(self,request,League):
        results=[]
        try:
            cursor=connection.cursor()
            strSql=f"SELECT * FROM crawled_data_clubstatistics WHERE League='{League}';"
            cursor.execute(strSql)
            datas=cursor.fetchall()
         
            for data in datas:
                item={
                    'id':data[0],
                    'specific_id':data[1],
                    'League':data[2],
                    'ranking':data[3],
                    'state':data[4],
                    'name':data[5],
                    'play':data[6],
                    'win':data[7],
                    'draw':data[8],
                    'lose':data[9],
                    'gf':data[10],
                    'gd':data[11],
                    'ga':data[12],
                    'pts':data[13],
                }
                results.append(item);

            connection.commit()
            connection.close()
        except:
            connection.rollback()
            print("Failed")
        
        return JsonResponse(list(results),safe=False)

class Player_Statistics(generics.ListCreateAPIView):
    # 장고 쿼리셋   
    # def get(self,request,League):
    #     data=PlayerStatistics.objects.filter(League=League).values()
    #     # return HttpResponse(position_data)
    #     return JsonResponse(list(data),safe=False)
    
    # sql문 사용
    def get(self,request,League):
        results=[]
        try:
            cursor=connection.cursor()
            strSql=f"SELECT * FROM crawled_data_playerstatistics WHERE League='{League}';"
            cursor.execute(strSql)
            datas=cursor.fetchall()
         
            for data in datas:
                item={
                    'id':data[0],
                    'specific_id':data[1],
                    'League':data[2],
                    'name':data[3],
                    'age':data[4],
                    'position':data[5],
                    'Games':data[6],
                    'Goals':data[7],
                    'Assists':data[8],
                    'SpG':data[9],
                    'PS':data[10],
                    'MotM':data[11],
                    'Rating':data[12],
                }
                results.append(item);

            connection.commit()
            connection.close()
        except:
            connection.rollback()
            print("Failed")
        
        return JsonResponse(list(results),safe=False)



# Search

class PlayerValueSearch(generics.ListCreateAPIView):
    # 장고 쿼리셋사용     
    # def get(self,request,name):
    #     data=PlayerValue.objects.filter(name__icontains=name).values()
    #     # return HttpResponse(position_data)
    #     return JsonResponse(list(data),safe=False)

    # sql문 사용
    def get(self,request,name):
        results=[]
        try:
            cursor=connection.cursor()
            strSql=f"SELECT * FROM crawled_data_playervalue WHERE name LIKE '%{name}%'"
            cursor.execute(strSql)
            datas=cursor.fetchall()
            for data in datas:
                item={
                    'id':data[0],
                    'specific_id':data[1],
                    '_position':data[2],
                    'ranking':data[3],
                    'player_image':data[4],
                    'name':data[5],
                    'position':data[6],
                    'age':data[7], 
                    'value':data[8], 
                }
                results.append(item);

            connection.commit()
            connection.close()
        except:
            connection.rollback()
            print("Failed")
        
        return JsonResponse(list(results),safe=False)
class ClubValueSearch(generics.ListCreateAPIView):
    # 장고 쿼리셋 사용
    # def get(self,request,name):
    #     data=ClubValue.objects.filter(name__icontains=name).values()
      
    #     return JsonResponse(list(data),safe=False)
    # sql문 사용
    def get(self,request,name):
        
        results=[]
        try:
            cursor=connection.cursor()
            strSql=f"SELECT * FROM crawled_data_clubvalue WHERE name LIKE '%{name}%'"
            cursor.execute(strSql)
            datas=cursor.fetchall()
            for data in datas:
                item={
                    'id':data[0],
                    'specific_id':data[1],
                    'ranking':data[2],
                    'club_image':data[3],
                    'name':data[4],
                    'Competition':data[5],
                    'value':data[6],    
                }
                results.append(item);

            connection.commit()
            connection.close()
        except:
            connection.rollback()
            print("Failed")
        
        return JsonResponse(list(results),safe=False)
class PlayerStatisticsSearch(generics.ListCreateAPIView):

    # 장고 쿼리셋 사용

    # def get(self,request,name):
    #     data=PlayerStatistics.objects.filter(name__icontains=name).values()
    #     # return HttpResponse(position_data)
    #     return JsonResponse(list(data),safe=False)


    # sql문 사용
    def get(self,request,name):
        
        results=[]
        try:
            cursor=connection.cursor()
            strSql=f"SELECT * FROM crawled_data_playerstatistics WHERE name LIKE '%{name}%'"
            cursor.execute(strSql)
            datas=cursor.fetchall()
            for data in datas:
                item={
                    'id':data[0],
                    'specific_id':data[1],
                    'League':data[2],
                    'name':data[3],
                    'age':data[4],
                    'position':data[5],
                    'Games':data[6],
                    'Goals':data[7],
                    'Assists':data[8],
                    'SpG':data[9],
                    'PS':data[10],
                    'MotM':data[11],
                    'Rating':data[12],
                    
                }
                results.append(item);

            connection.commit()
            connection.close()
        except:
            connection.rollback()
            print("Failed")
        
        return JsonResponse(list(results),safe=False)
class ClubStatisticsSearch(generics.ListCreateAPIView):
    # serializer_class=ValueSerializer    
    # def get(self,request,name):
    #     data=ClubStatistics.objects.filter(name__icontains=name).values()
    #     # return HttpResponse(position_data)
    #     return JsonResponse(list(data),safe=False)

    def get(self,request,name):
        stats=ClubStatistics.objects.all();
        results=[]
        try:
            cursor=connection.cursor()
            strSql=f"SELECT * FROM crawled_data_clubstatistics WHERE name LIKE '%{name}%'"
            cursor.execute(strSql)
            datas=cursor.fetchall()
            for data in datas:
                item={
                    'id':data[0],
                    'specific_id':data[1],
                    'League':data[2],
                    'ranking':data[3],
                    'state':data[4],
                    'name':data[5],
                    'play':data[6],
                    'win':data[7],
                    'draw':data[8],
                    'lose':data[9],
                    'gf':data[10],
                    'gd':data[11],
                    'ga':data[12],
                    'pts':data[13],
                }
                results.append(item);

            connection.commit()
            connection.close()
        except:
            connection.rollback()
            print("Failed")
        
        return JsonResponse(list(results),safe=False)