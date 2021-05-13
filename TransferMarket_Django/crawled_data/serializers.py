from rest_framework import serializers
from .models import ClubValue

from .models import PlayerValue

class ValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClubValue
        fields = '__all__'

