from django.urls import path
from . import views



urlpatterns = [
    # path('',views.player_value,name='player_value'),
    path('',views.ListPlayerValue.as_view()),
    path('<int:pk>',views.DetailPlayerValue.as_view()),
]