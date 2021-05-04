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
    club_value = models.CharField(max_length=200)

class ForwardValue(models.Model):
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

class MidFieldValue(models.Model):
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


class DefenderValue(models.Model):
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

class GoalKeeperValue(models.Model):
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


class PremierPlayerStatistics(models.Model):
    specific_id = models.IntegerField()
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

class LaligaPlayerStatistics(models.Model):
    specific_id = models.IntegerField()
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

class BundesligaPlayerStatistics(models.Model):
    specific_id = models.IntegerField()
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

class SerieAPlayerStatistics(models.Model):
    specific_id = models.IntegerField()
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

class Ligue1PlayerStatistics(models.Model):
    specific_id = models.IntegerField()
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

