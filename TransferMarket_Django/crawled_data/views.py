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
    # serializer_class=ValueSerializer    
    def get(self,request,_position):
        position_data=PlayerValue.objects.filter(_position=_position).values()
        # return HttpResponse(position_data)
        return JsonResponse(list(position_data),safe=False)

class Club_Value(generics.ListCreateAPIView):
    serializer_class=ValueSerializer    
    queryset=ClubValue.objects.all()
    # def get(self):
    #     data=ClubValue.objects.all()
    #     # return HttpResponse(position_data)
    #     return JsonResponse(list(data),safe=False)

class Club_Statistics(generics.ListCreateAPIView):
    # serializer_class=ValueSerializer    
    def get(self,request,League):
        data=ClubStatistics.objects.filter(League=League).values()
        # return HttpResponse(position_data)
        return JsonResponse(list(data),safe=False)

class Player_Statistics(generics.ListCreateAPIView):
    # serializer_class=ValueSerializer    
    def get(self,request,League):
        data=PlayerStatistics.objects.filter(League=League).values()
        # return HttpResponse(position_data)
        return JsonResponse(list(data),safe=False)



# Search

class PlayerValueSearch(generics.ListCreateAPIView):
    # serializer_class=ValueSerializer    
    def get(self,request,name):
        data=PlayerValue.objects.filter(name__icontains=name).values()
        # return HttpResponse(position_data)
        return JsonResponse(list(data),safe=False)
# 안되나..
class ClubValueSearch(generics.ListCreateAPIView):
    # serializer_class=ValueSerializer
    # queryset=ClubValue.objects.all()
    def get(self,request,name):
        data=ClubValue.objects.filter(name__icontains=name).values()
        # return HttpResponse(position_data)
        return JsonResponse(list(data),safe=False)
class PlayerStatisticsSearch(generics.ListCreateAPIView):
    # serializer_class=ValueSerializer    
    def get(self,request,name):
        data=PlayerStatistics.objects.filter(name__icontains=name).values()
        # return HttpResponse(position_data)
        return JsonResponse(list(data),safe=False)
class ClubStatisticsSearch(generics.ListCreateAPIView):
    # serializer_class=ValueSerializer    
    def get(self,request,name):
        data=ClubStatistics.objects.filter(name__icontains=name).values()
        # return HttpResponse(position_data)
        return JsonResponse(list(data),safe=False)