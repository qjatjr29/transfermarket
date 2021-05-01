from django.db import models

# Create your models here.


class PlayerData(models.Model):
    specific_id = models.IntegerField()
    ranking = models.IntegerField()
    player_image = models.URLField()
    name = models.CharField(max_length=225)
    position = models.CharField(max_length=225)
    age = models.CharField(max_length=10)
    nation_image = models.URLField()
    nation = models.CharField(max_length=225)
    team_image = models.URLField()
    team = models.CharField(max_length=225)
    value = models.CharField(max_length=225)


class ClubData(models.Model):
    specific_id = models.IntegerField()
    ranking = models.IntegerField()
    club_image = models.URLField()
    name = models.CharField(max_length=225)
    Competition_image = models.URLField()
    Competition = models.CharField(max_length=255)
    club_value = models.FloatField()