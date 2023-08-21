from django.urls import path
from . import views

urlpatterns = [
    path('ajax-email-form', views.get_mail, name='get_mail'),
]