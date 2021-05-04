from rest_framework import serializers
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

class PlayerValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerData
        fields = '__all__'

class ClubValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClubData
        fields = '__all__'


class ForwardValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForwardValue
        fields = '__all__'


class MidFieldValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = MidFieldValue
        fields = '__all__'

class DefenderValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = DefenderValue
        fields = '__all__'

class GoalKeeperValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoalKeeperValue
        fields = '__all__'


class PremierPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = PremierPlayerStatistics
        fields = '__all__'

class LaligaPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = LaligaPlayerStatistics
        fields = '__all__'

class BundesligaPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BundesligaPlayerStatistics
        fields = '__all__'

class SerieAPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = SerieAPlayerStatistics
        fields = '__all__'

class Ligue1PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ligue1PlayerStatistics
        fields = '__all__'


# 시리얼라이저 : 파이썬 언어를 브라우저가 이해할 수 있는 json 형식으로 바꾸준다.        