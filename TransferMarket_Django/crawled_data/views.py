from django.shortcuts import render
from django.utils import timezone
from rest_framework import generics
from .serializers import PlayerValueSerializer
from .models import PlayerData
# Create your views here.

# def player_value(request):
#     players=PlayerData.objects.all()
#     return render(request,'crawled_data/player_value.html',{'players':players})


class ListPlayerValue(generics.ListCreateAPIView):
    serializer_class=PlayerValueSerializer
    queryset=PlayerData.objects.all()
    
class DetailPlayerValue(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=PlayerValueSerializer
    queryset=PlayerData.objects.all()

