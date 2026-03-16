from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.tokens import RefreshToken
import json

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
    if User.objects.filter(username=username).exists():
        return Response({"status":"error","message":"Username already exists"}, status=400)
    # Create user
    user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username)
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