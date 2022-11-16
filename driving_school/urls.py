from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name = 'mainpage' ),
    path('', views.index2, name='index2')

]