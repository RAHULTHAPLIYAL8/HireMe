from django.urls import path
from . import views

urlpatterns = [
    path('userlogin/', views.login_view),
    path('register/', views.register)
]