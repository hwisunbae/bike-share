from a_manage_location.models import *
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from a_manage_bike.models import *

def index(request):
    if request.GET:
        pass
    else:
        locations = location.objects.all()
        bikes = bike.objects.all()
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
                print(i.new_lat)
                loc_lat_bike.append(float(i.new_lat))
                loc_lon_bike.append(float(i.new_lng))


        context = {}
        context['loc_lats'] = loc_lats
        context['loc_lons'] = loc_lons

        context['loc_lat_bike'] = loc_lat_bike
        context['loc_lon_bike'] = loc_lon_bike

        context['bike_numbers'] = bike_numbers
        bikes = bike.objects.all()
        context['bikes'] = bikes
        context['locations'] = locations

        return render(request, 'admin/a_manage_bike.html', context)



def addNewBike(request):
    context = {}
    locations = location.objects.all()
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


@csrf_exempt
def deleteBike_do(request):
    if request.POST:
        id = request.POST.get('id')
        bike.objects.filter(id=id).delete()
        return HttpResponse("success")
    else:
        return HttpResponse("error")

@csrf_exempt
def changeInformation_do(request):
    if request.POST:
        id = request.POST.get('id')
        type = request.POST.get('type')
        location_id = request.POST.get('location_id')
        oldLocation = request.POST.get('oldLocation')
        rent_money = request.POST.get('rent_money')
        open_password = request.POST.get('open_password')
        if location_id == oldLocation:
            bike.objects.filter(id=id).update(type=type,open_password=open_password,rent_money=rent_money)
        else:
            bike.objects.filter(id=id).update(location_id = location_id,type=type,open_password=open_password,rent_money=rent_money)
            newLocation_get = location.objects.get(id=location_id)
            newLocation_get.bike_count += 1
            newLocation_get.bike_count_now += 1
            newLocation_get.save()
            oldLocation_get = location.objects.get(id=oldLocation)
            oldLocation_get.bike_count -= 1
            oldLocation_get.bike_count_now -= 1
            oldLocation_get.save()
        return HttpResponse("success")
    else:
        return HttpResponse("error")
