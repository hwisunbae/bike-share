from django.core import serializers
from django.shortcuts import render
from django.http import HttpResponse
import json
from a_manage_bike.models import *


def findBike(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'operator/o_find_bike.html',context)

def repairBike(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'operator/o_repair_bike.html', context)

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


def transportBike(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'operator/o_transport_bike.html',context)


