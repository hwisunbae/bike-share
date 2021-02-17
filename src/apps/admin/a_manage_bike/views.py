from a_manage_location.models import *
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from a_manage_bike.models import *
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


@csrf_exempt
def addNewBike_do(request):
    if request.POST:
        location_id = request.POST.get('locations')
        location_get = location.objects.get(id=location_id)
        types = request.POST.get('types')
        password = request.POST.get('password')
        rentMoney = request.POST.get('rentMoney')
        obj = bike(
            location_id=location_get,
            type=types,
            open_password=password,
            rent_money=rentMoney
        )
        obj.save()
        location_get.bike_count +=1
        location_get.bike_count_now += 1
        location_get.save()
        return HttpResponse('success')
    else:
        return HttpResponse('error')