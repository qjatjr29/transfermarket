from django.shortcuts import render
from django.utils import timezone
from .models import PlayerData
# Create your views here.

def value_list(request):
    players=PlayerData.objects.all()
    return render(request,'crawled_data/value_list.html',{'players':players})