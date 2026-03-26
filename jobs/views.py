from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from .models import Jobs
import json

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Jobs

@api_view(["POST"])
@csrf_exempt
def add_jobs(request):
    try:
        data = json.loads(request.body)

        title = data.get("title")
        company_name = data.get("company_name")
        company_website = data.get("company_website")
        location = data.get("location")
        job_type = data.get("job_type")  
        salary_min = data.get("salary_min")
        salary_max = data.get("salary_max")
        currency = data.get("currency")
        experience = data.get("experience")
        description = data.get("description")

        job = Jobs.objects.create(
            posted_by=request.user,  
            title=title,
            company_name=company_name,
            company_website=company_website,
            location=location,
            job_type_choices=job_type,      
            salary_min=salary_min,
            salary_max=salary_max,
            currency=currency,
            experience=experience,
            description=description
        )

        return Response({
            "status": "true",
            "message": "Job created successfully",
            "job_id": job.id
        }, status=201)

    except Exception as e:
        return Response({
            "status": "false",
            "message": str(e)
        }, status=400)

