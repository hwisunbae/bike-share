from django.core import serializers
from django.shortcuts import render
from django.http import HttpResponse
import json
import datetime
import time

from django.views.decorators.csrf import csrf_exempt
from a_manage_bike.models import *
from o_manage_bike.models import *

@csrf_exempt
def findBike(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'operator/o_find_bike.html',context)

@csrf_exempt
def repairBike(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'operator/o_repair_bike.html', context)

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
        startTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        new_start_time = datetime.datetime.strptime(startTime, '%Y-%m-%d %H:%M:%S')
        bikeid = bike.objects.get(id=bikeId)
        operatorid = operator_account.objects.get(id=request.COOKIES.get("o_userid"))

        obj = operator_repair_history(
            # enddate
            operator_id=operatorid,
            bike_id=bikeid,
            location=location,
            start_time=new_start_time
        )
        obj.save()
        return HttpResponse('success')
    else:
        return HttpResponse("error")

@csrf_exempt
def transportBike(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'operator/o_transport_bike.html',context)


