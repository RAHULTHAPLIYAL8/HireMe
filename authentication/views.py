from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.tokens import RefreshToken
import json
from django.contrib.auth import get_user_model
from django.db import models

User=get_user_model()

# ---- LOGIN ----
@api_view(['POST'])
@csrf_exempt
def login_view(request):
    data = json.loads(request.body)
    username = data.get('user')
    password = data.get('password')
    if not User.objects.filter(username=username).exists():
        return Response({"status":"error","message":"Invalid Username"}, status=400)   
    user = authenticate(request, username=username, password=password)
    if user is None:
        return Response({"status":"error","message":"Invalid Password"}, status=400)
    # Generate JWT tokens
    refresh = RefreshToken.for_user(user)
    access_token = str(refresh.access_token)
    refresh_token = str(refresh)   
    # login(request, user)
    return Response({"status":"ok","message":"Logged in successfully","access":access_token,"refresh":refresh_token}, status=200)

# ---- REGISTER ----
@api_view(['POST'])
def register(request):
    data = json.loads(request.body)
    first_name = data.get("first_name")
    last_name = data.get("last_name")
    username = data.get("username")
    password = data.get("password")
    type=data.get("userType")
    if User.objects.filter(username=username).exists():
        return Response({"status":"error","message":"Username already exists"}, status=400)
    # Create user
    user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username,user_type=type)
    user.set_password(password)
    user.save()
    # Generate JWT tokens
    refresh = RefreshToken.for_user(user)
    access_token = str(refresh.access_token)
    refresh_token = str(refresh)
    return Response({"status": "ok","message": "User created successfully","access": access_token,"refresh": refresh_token}, status=201)

# ---- LIST VIEW ----
@api_view(["GET"])
@permission_classes([IsAuthenticated])
@csrf_exempt
def list_view(request):
    return Response({"message": "Ye wali api sirf authenticated user hee dekh ske"})

class JobSeekerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    skills = models.TextField(help_text="Comma separated skills")
    experience = models.IntegerField(default=0)  # in years
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    location = models.CharField(max_length=100)
    expected_salary = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

class HirerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=150)
    company_description = models.TextField()
    website = models.URLField(blank=True)
    location = models.CharField(max_length=100)
    company_logo = models.ImageField(upload_to='company_logos/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.company_name