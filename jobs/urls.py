from django.urls import URLPattern,path
from . import views

urlpatterns = [
    path('addjob/', views.add_jobs),
]