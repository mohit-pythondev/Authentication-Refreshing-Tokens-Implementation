from django.urls import path
from base.api import views
urlpatterns = [
    path('', views.getRoutes, name="routes"),
]