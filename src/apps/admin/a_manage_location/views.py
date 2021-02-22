from django.shortcuts import render
from django.http import HttpResponse
from a_manage_location.models import *
from a_manage_bike.models import *
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    if request.GET:
        pass
    else:
        bikes = bike.objects.all()
        locations = location.objects.all()
        loc_lats = []
        loc_lons = []
        bike_numbers = []
        for i in locations:
            if i.id != 1:
                loc_lats.append(float(i.lat))
                loc_lons.append(float(i.lng))
                bike_numbers.append(int(i.bike_count_now))

        loc_lat_bike = []
        loc_lon_bike = []
        for i in bikes:
            if i.new_lat != None:
                loc_lat_bike.append(float(i.new_lat))
                loc_lon_bike.append(float(i.new_lng))


        context = {}
        context['loc_lats'] = loc_lats
        context['loc_lons'] = loc_lons
        context['bike_numbers'] = bike_numbers

        context['loc_lat_bike'] = loc_lat_bike
        context['loc_lon_bike'] = loc_lon_bike

        context['locations'] = locations
        return render(request, 'admin/a_manage_location.html', context)

def addNewLocation(request):
    if request.GET:
        pass
    else:
        bikes = bike.objects.all()

        locations = location.objects.all()
        loc_lats = []
        loc_lons = []
        bike_numbers = []
        for i in locations:
            if i.id != 1:
                loc_lats.append(float(i.lat))
                loc_lons.append(float(i.lng))
                bike_numbers.append(int(i.bike_count_now))

        loc_lat_bike = []
        loc_lon_bike = []
        for i in bikes:
            if i.new_lat:
                loc_lat_bike.append(float(i.new_lat))
                loc_lon_bike.append(float(i.new_lng))

        context = {}
        context['loc_lats'] = loc_lats
        context['loc_lons'] = loc_lons
        context['bike_numbers'] = bike_numbers

        context['loc_lat_bike'] = loc_lat_bike
        context['loc_lon_bike'] = loc_lon_bike

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