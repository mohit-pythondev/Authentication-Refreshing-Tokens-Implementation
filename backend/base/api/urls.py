from django.urls import path
from base.api.views import getRoutes,myTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
urlpatterns = [
    path('', getRoutes, name="routes"),
    path('token/', myTokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
]