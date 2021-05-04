from django.shortcuts import render
from django.utils import timezone
from rest_framework import generics
from .serializers import PlayerValueSerializer
from .serializers import ForwardValueSerializer
from .serializers import ClubValueSerializer
from .serializers import MidFieldValueSerializer
from .serializers import DefenderValueSerializer
from .serializers import GoalKeeperValueSerializer
from .serializers import PremierPlayerSerializer
from .serializers import LaligaPlayerSerializer
from .serializers import BundesligaPlayerSerializer
from .serializers import SerieAPlayerSerializer
from .serializers import Ligue1PlayerSerializer

from .models import PlayerData
from .models import ForwardValue
from .models import ClubData
from .models import MidFieldValue
from .models import DefenderValue
from .models import GoalKeeperValue
from .models import PremierPlayerStatistics
from .models import LaligaPlayerStatistics
from .models import SerieAPlayerStatistics
from .models import BundesligaPlayerStatistics
from .models import Ligue1PlayerStatistics
# Create your views here.

# def player_value(request):
#     players=PlayerData.objects.all()
#     return render(request,'crawled_data/player_value.html',{'players':players})


# players
class ListPlayerValue(generics.ListCreateAPIView):
    serializer_class=PlayerValueSerializer
    queryset=PlayerData.objects.all()
    
class DetailPlayerValue(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=PlayerValueSerializer
    queryset=PlayerData.objects.all()

# club
class ListClubValue(generics.ListCreateAPIView):
    serializer_class=ClubValueSerializer
    queryset=ClubData.objects.all()

class DetailClubValue(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=ClubValueSerializer
    queryset=ClubData.objects.all()


# forward
class ListForwardValue(generics.ListCreateAPIView):
    serializer_class=ForwardValueSerializer
    queryset=ForwardValue.objects.all()

class DetailForwardValue(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=ForwardValueSerializer
    queryset=ForwardValue.objects.all()

# midfield
class ListMidFieldValue(generics.ListCreateAPIView):
    serializer_class=MidFieldValueSerializer
    queryset=MidFieldValue.objects.all()

class DetailMidFieldValue(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=MidFieldValueSerializer
    queryset=MidFieldValue.objects.all()

# defender
class ListDefenderValue(generics.ListCreateAPIView):
    serializer_class=DefenderValueSerializer
    queryset=DefenderValue.objects.all()

class DetailDefenderValue(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=DefenderValueSerializer
    queryset=DefenderValue.objects.all()
# goalkeeper

class ListGoalKeeperValue(generics.ListCreateAPIView):
    serializer_class=GoalKeeperValueSerializer
    queryset=GoalKeeperValue.objects.all()

class DetailGoalKeeperValue(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=GoalKeeperValueSerializer
    queryset=GoalKeeperValue.objects.all()


#Premier
class ListPremierPlayerStatistics(generics.ListCreateAPIView):
    serializer_class=PremierPlayerSerializer
    queryset=PremierPlayerStatistics.objects.all()

class DetailPremierPlayerStatistics(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=PremierPlayerSerializer
    queryset=PremierPlayerStatistics.objects.all()

#Laliga
class ListLaligaPlayerStatistics(generics.ListCreateAPIView):
    serializer_class=LaligaPlayerSerializer
    queryset=LaligaPlayerStatistics.objects.all()

class DetailLaligaPlayerStatistics(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=LaligaPlayerSerializer
    queryset=LaligaPlayerStatistics.objects.all()

# Bundesliga
class ListBundesligaPlayerStatistics(generics.ListCreateAPIView):
    serializer_class=BundesligaPlayerSerializer
    queryset=BundesligaPlayerStatistics.objects.all()

class DetailBundesligaPlayerStatistics(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=BundesligaPlayerSerializer
    queryset=BundesligaPlayerStatistics.objects.all()

# SerieA
class ListSerieAPlayerStatistics(generics.ListCreateAPIView):
    serializer_class=SerieAPlayerSerializer
    queryset=SerieAPlayerStatistics.objects.all()

class DetailSerieAPlayerStatistics(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=SerieAPlayerSerializer
    queryset=SerieAPlayerStatistics.objects.all()

# Ligue1
class ListLigue1PlayerStatistics(generics.ListCreateAPIView):
    serializer_class=Ligue1PlayerSerializer
    queryset=Ligue1PlayerStatistics.objects.all()

class DetailLigue1PlayerStatistics(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=Ligue1PlayerSerializer
    queryset=Ligue1PlayerStatistics.objects.all()