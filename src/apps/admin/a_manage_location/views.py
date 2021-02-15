from django.shortcuts import render
from django.http import HttpResponse
from a_manage_location.models import *
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_manage_bike.html', context)

def addNewLocation(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_add_location.html', context)

@csrf_exempt
def addNewLocation_do(request):
    if request.POST:
        name = request.POST.get('name')
        lng = request.POST.get('lng')
        lat = request.POST.get('lat')
        count = 0;
        obj = location(
            location_name=name,
            lat=lat,
            lng=lng,
            bike_count=count,
            bike_count_now=count
        )
        obj.save()
        return HttpResponse('success')
    else:
        return HttpResponse("error")