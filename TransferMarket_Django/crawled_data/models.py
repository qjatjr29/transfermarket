from django.db import models

# Create your models here.


class PlayerData(models.Model):
    specific_id = models.CharField(max_length=15)
    ranking = models.CharField(max_length=15)
    player_image = models.URLField()
    name = models.CharField(max_length=15)
    position = models.CharField(max_length=40)
    age = models.CharField(max_length=10)
    nation_image = models.URLField()
    nation = models.CharField(max_length=25)
    team_image = models.URLField()
    team = models.CharField(max_length=25)
    value = models.CharField(max_length=15)


class ClubData(models.Model):
    specific_id = models.CharField(max_length=15,default="")
    ranking = models.CharField(max_length=15)
    club_image = models.URLField()
    name = models.CharField(max_length=15)
    Competition_image = models.URLField()
    Competition = models.CharField(max_length=25)
    club_value = models.CharField(max_length=15)