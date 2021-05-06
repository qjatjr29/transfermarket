"""TransferMarket_Django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
# from rest_framework import routers
# from crawled_data import views

# router=routes.DefaultRouter()
# router.register('playerValue',views.PlayerValueView,'playerValue')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('playerValue/',include('crawled_data.playerValue')),
    path('forwardValue/',include('crawled_data.forwardValue')),
    path('clubValue/',include('crawled_data.clubValue')),
    path('midfieldValue/',include('crawled_data.midfieldValue')),
    path('defenderValue/',include('crawled_data.defenderValue')),
    path('goalKeeperValue/',include('crawled_data.goalKeeperValue')),

    path('premierPlayer/',include('crawled_data.PremierPlayer')),
    path('laligaPlayer/',include('crawled_data.LaligaPlayer')),
    path('bundesligaPlayer/',include('crawled_data.BundesligaPlayer')),
    path('serieAPlayer/',include('crawled_data.SerieAPlayer')),
    path('ligue1Player/',include('crawled_data.Ligue1Player')),

    path('premierClub/',include('crawled_data.PremierClub')),
    path('laligaClub/',include('crawled_data.LaLigaClub')),
    path('bundesligaClub/',include('crawled_data.BundesligaClub')),
    path('serieAClub/',include('crawled_data.SerieAClub')),
    path('ligue1Club/',include('crawled_data.Ligue1Club')),


    # path('',include('crawled_data.urls')),
    # path('playerValue',include(router.urls)),
]
