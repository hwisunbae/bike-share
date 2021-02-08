from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def findBike(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'operator/o_find_bike.html',context)

def repairBike(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'operator/o_repair_bike.html',context)

def transportBike(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'operator/o_transport_bike.html',context)


