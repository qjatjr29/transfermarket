from rest_framework import serializers
from .models import PlayerData


class PlayerValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerData
        fields = '__all__'


# 시리얼라이저 : 파이썬 언어를 브라우저가 이해할 수 있는 json 형식으로 바꾸준다.        