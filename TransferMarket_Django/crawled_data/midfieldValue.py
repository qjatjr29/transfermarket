from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListMidFieldValue.as_view()),
    path('<int:pk>',views.DetailMidFieldValue.as_view()),
]