from django.urls import path
from . import views

urlpatterns = [
    path('portfolio/halaim', views.halaim, name='portfolio_1'),
]
