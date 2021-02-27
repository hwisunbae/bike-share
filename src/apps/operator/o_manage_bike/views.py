from django.core import serializers
from django.shortcuts import render
from django.http import HttpResponse
import json
import datetime
import time

from django.views.decorators.csrf import csrf_exempt
from a_manage_bike.models import *
from u_biking.models import *
from a_manage_bike.models import *
from o_manage_bike.models import *
from o_login.models import *

def findBike(request):
    userid = request.COOKIES.get("o_userid")
    if userid:
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
        return render(request, 'operator/o_find_bike.html', context)
    else:
        return render(request, 'operator/o_login.html')

def findBike_do(request):
    if request.GET:
        bikeId = request.GET.get('bikeId')
        isExist = bike.objects.filter(id=bikeId).count()
        if isExist:
            obj = bike.objects.get(id=bikeId)
            context = {}
            context['id'] = obj.id
            context['type'] = obj.type
            context['open_password'] = obj.open_password
            context['new_lat'] = obj.new_lat
            context['new_lng'] = obj.new_lng
            context['is_use'] = obj.is_use
            json_obj = json.dumps(context)
            return HttpResponse(json_obj)
        else:
            return HttpResponse('BikeIDError')
    else:
        return HttpResponse("error")

def repairBike(request):
    userid = request.COOKIES.get("o_userid")
    if userid:
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

        return render(request, 'operator/o_repair_bike.html', context)
    else:
        return render(request, 'operator/o_login.html')

@csrf_exempt
def repairBike_do(request):
    if request.GET:
        bikeId = request.GET.get('bikeId')
        isExist = bike_malfunction_history.objects.filter(bike_id=bikeId).count()
        if isExist:
            obj = bike_malfunction_history.objects.get(bike_id=bikeId)
            context = {}
            context['id'] = obj.id
            context['question_type'] = obj.question_type
            context['detail'] = obj.detail
            context['is_repaired'] = obj.is_repaired
            json_obj = json.dumps(context)
            return HttpResponse(json_obj)
        else:
            return HttpResponse('BikeIDError')
    else:
        return HttpResponse("error")

@csrf_exempt
def addNewRepair_do(request):
    # operator_repair_history
    if request.POST:

        bikeId = request.POST.get('bikeId')
        location = request.POST.get('location')
        endTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        new_end_time = datetime.datetime.strptime(endTime, '%Y-%m-%d %H:%M:%S')
        startTime = request.POST.get('timeStart')
        new_start_time = datetime.datetime.strptime(startTime, '%Y-%m-%d %H:%M:%S')
        bikeid = bike.objects.get(id=bikeId)
        operatorid = operator_account.objects.get(id=request.COOKIES.get("o_userid"))

        obj = operator_repair_history(
            operator_id=operatorid,
            bike_id=bikeid,
            location=location,
            end_time=new_end_time,
            start_time=new_start_time
        )
        obj.save()
        return HttpResponse('success')
    else:
        return HttpResponse("error")


def transportBike(request):
    userid = request.COOKIES.get("o_userid")
    if userid:
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

        context['locations'] = locations
        Bikes = bike.objects.filter(is_use="False")
        context['Bikes'] = Bikes

        return render(request, 'operator/o_transport_bike.html', context)
    else:
        return render(request, 'operator/o_login.html')


@csrf_exempt
def transportBike_do(request):
    userid = request.COOKIES.get("o_userid")
    if request.POST:
        bikeId = request.POST.get('bikeId')
        locationId = request.POST.get('locationId')
        isExist = bike.objects.get(id=bikeId)
        if isExist:
            locationid = location.objects.get(id=locationId)
            operator_id = operator_account.objects.get(id=userid)
            Time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            newTime = datetime.datetime.strptime(Time, '%Y-%m-%d %H:%M:%S')
            obj = operator_transport_history(
                operator_id=operator_id,
                bike_id=isExist,
                location_id=locationid,
                time=newTime
            )
            obj.save()
            # location bike ++
            location_get = location.objects.get(id=locationId)
            location_get.bike_count += 1
            location_get.bike_count_now += 1
            location_get.save()
            # update the bike's location
            bike_get = bike.objects.get(id=bikeId)
            bike_get.location_id=location_get
            bike_get.new_lat = None
            bike_get.new_lng = None
            bike_get.save()

            return HttpResponse("success")
        else:
            return HttpResponse('BikeIDError')
    else:
        return HttpResponse("error")
