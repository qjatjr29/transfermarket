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
# from TransferMarket_Django import crawled_data




urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/SearchTerm',include('crawled_data.search')),
    path('',include('crawled_data.value')),
    path('',include('crawled_data.statistic'))
    # path('testList/<int:_id>',TestList.as_view())
    
]
