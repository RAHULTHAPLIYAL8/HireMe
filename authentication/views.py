from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.

# @desc view for Login a user
# @api api/auth/login
# @method POST
@api_view(['POST'])
@csrf_exempt
def login_view(request):
    if request.method=="POST":
        data=json.loads(request.body)
        user=data.get('user')
        password=data.get('password')

        if not User.objects.filter(username=user).exists():
            return Response({"staus":"error","message":"Invalid Username"},status=400)
        user=authenticate(request,username=user,password=password)
        
        if user is None:
            return  Response({"staus":"error","message":"Invalid Password"},status=400)
        else:
            login(request,user)
            return  Response({"staus":"ok","message":"Username Created"},status=200)
    return  Response({"message": "Invalid Request"})


# @desc view for register a user
# @api api/auth/login
# @method POST
@api_view(['POST'])
@csrf_exempt
def register(request):
    if request.method=='POST':
        data=json.loads(request.body)
        first_name=data.get("first_name")
        last_name=data.get("last_name")
        username=data.get("username")
        password=data.get("password")

        # check user is already exist in this name
        user=User.objects.filter(username=username)
        if user.exists():
             # Display an information message if the username is taken
             return JsonResponse({"status":"error","message":"Username already existed"})
        # Create a new user object with the provided information
        user=User.objects.create_user(first_name=first_name,last_name=last_name,username=username,)

        user.set_password(password)
        user.save()
        return JsonResponse({"status":"true","message":"New Username Saved"})   
    return JsonResponse({"message":"Invalid Request"})   

