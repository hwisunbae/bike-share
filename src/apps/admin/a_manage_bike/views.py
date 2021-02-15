from a_manage_location.models import *
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_manage_bike.html', context)



def addNewBike(request):
    if request.GET:
        pass
    else:
        locations = location.objects.all()
        context = {}
        context['locations'] = locations

        return render(request, 'admin/a_add_bike.html', context)
