from django.shortcuts import render
from django.http import HttpResponse
from a_manage_location.models import *
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    if request.GET:
        pass
    else:
        locations = location.objects.all()
        loc_lats = []
        loc_lons = []
        bike_numbers = []
        for i in locations:
            loc_lats.append(float(i.lat))
            loc_lons.append(float(i.lng))
            bike_numbers.append(int(i.bike_count_now))
        context = {}
        context['loc_lats'] = loc_lats
        context['loc_lons'] = loc_lons
        context['bike_numbers'] = bike_numbers
        context['locations'] = locations
        return render(request, 'admin/a_manage_location.html', context)

def addNewLocation(request):
    if request.GET:
        pass
    else:
        locations = location.objects.all()
        loc_lats = []
        loc_lons = []
        bike_numbers = []
        for i in locations:
            loc_lats.append(float(i.lat))
            loc_lons.append(float(i.lng))
            bike_numbers.append(int(i.bike_count_now))
        context = {}
        context['loc_lats'] = loc_lats
        context['loc_lons'] = loc_lons
        context['bike_numbers'] = bike_numbers
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


@csrf_exempt
def deleteLocation_do(request):
    if request.POST:
        id = request.POST.get('id')
        location_d = location.objects.get(id=id)
        if location_d.bike_count != None:
            bikeCount = int(location_d.bike_count)
            if bikeCount>0:
                return HttpResponse("haveBike")

        location.objects.filter(id=id).delete()
        return HttpResponse("success")
    else:
        return HttpResponse("error")