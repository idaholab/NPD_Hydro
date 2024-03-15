from django.urls import path

from . import views

urlpatterns = [
    path('counties', views.counties, name="counties"),
    path('inventory', views.np_inventory_master, name="invetory"),
]
