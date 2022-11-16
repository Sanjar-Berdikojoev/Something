from django.shortcuts import render
from . import models

def index(request):
    instructor = models.Instructor.objects.all()
    return render(request, 'index.html', {'instructor': instructor})

def index2(request):
    advantage = models.Advantage.objects.all()
    return render(request, 'index.html', {'advantage': advantage})
# Create your views here.
