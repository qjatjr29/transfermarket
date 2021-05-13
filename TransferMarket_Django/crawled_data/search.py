from django.urls import path,include
from . import views
from rest_framework import routers

router=routers.DefaultRouter()
router.register('TestList',views.TestList,'TestList')


urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListPremierPlayerStatistics.as_view()),
    path('<int:pk>',views.DetailPremierPlayerStatistics.as_view()),
    path('api',include(router.urls))
]