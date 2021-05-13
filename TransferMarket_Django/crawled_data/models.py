from django.db import models

# Create your models here.


class ClubValue(models.Model):
    specific_id = models.IntegerField()
    ranking = models.IntegerField()
    club_image = models.URLField()
    name = models.CharField(max_length=225)
    Competition = models.CharField(max_length=255)
    value = models.CharField(max_length=200)
  
class PlayerValue(models.Model):
    specific_id = models.IntegerField()
    _position=models.CharField(max_length=225)
    ranking = models.IntegerField()
    player_image = models.URLField()
    name = models.CharField(max_length=225)
    position = models.CharField(max_length=225)
    age = models.CharField(max_length=10)
    value = models.CharField(max_length=225)  

class PlayerStatistics(models.Model):
    specific_id = models.IntegerField()
    League=models.CharField(max_length=225)
    name = models.CharField(max_length=225)
    age = models.CharField(max_length=225)
    position = models.CharField(max_length=225)
    Games = models.CharField(max_length=225)
    Goals = models.CharField(max_length=225)
    Assists = models.CharField(max_length=225)
    SpG = models.CharField(max_length=225)
    PS = models.CharField(max_length=225)
    MotM = models.CharField(max_length=225)
    Rating = models.CharField(max_length=225)

class ClubStatistics(models.Model):
    specific_id = models.CharField(max_length=225)
    League=models.CharField(max_length=225)
    ranking = models.CharField(max_length=225,default = '')
    state = models.CharField(max_length=225, default = '')
    name = models.CharField(max_length=225)
    play = models.CharField(max_length=225)
    win = models.CharField(max_length=225)
    draw = models.CharField(max_length=225)
    lose = models.CharField(max_length=225)
    gf = models.CharField(max_length=225)
    gd = models.CharField(max_length=225)
    ga = models.CharField(max_length=225)
    pts = models.CharField(max_length=225)