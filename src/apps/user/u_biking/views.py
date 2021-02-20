import datetime

from django.shortcuts import render
from django.http import HttpResponse
from a_manage_bike.models import *
from u_login.models import *
from u_biking.models import *
from a_manage_location.models import *
import time
import math
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    # user_route.objects.filter(id=6).delete()
    userid = request.COOKIES.get("u_userid")
    print(userid)
    userRoute = user_route.objects.filter(user_id=userid)
    routeId = None
    for i in userRoute:
        if i.end_time == None or i.end_time == "":
            routeId = i.id

    if routeId == None:
        bikeid = request.GET.get("bikeid")
        Latitude = request.GET.get("Latitude")
        longitude = request.GET.get("longitude")
        bike.objects.filter(id=bikeid).update(new_lat=Latitude,new_lng=longitude,is_use="True")
        # user_route store the start time and start location
        User = user_account.objects.get(id=userid)
        Bike = bike.objects.get(id=bikeid)
        startTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        new_start_time = datetime.datetime.strptime(startTime, '%Y-%m-%d %H:%M:%S')
        obj = user_route(
            user_id=User,
            bike_id=Bike,
            latitude=Latitude,
            longitude=longitude,
            start_time=new_start_time
        )
        obj.save()

        # location bike_count_now -1
        if Bike.new_lat != Bike.location_id.lat and Bike.new_lng != Bike.location_id.lng:
            location_get = location.objects.get(id=Bike.location_id.id)
            location_get.bike_count_now -= 1
            location_get.save()

        bikeRouteId = user_route.objects.get(user_id=userid,bike_id=bikeid,latitude=Latitude,longitude=longitude,start_time=startTime)
        context = {}
        context['bikeRouteId'] = bikeRouteId.id
        context['User'] = userid
        context['Bike'] = Bike
        context['startTime'] = startTime
        context['Latitude'] = Latitude
        context['longitude'] = longitude
        return render(request,'user/u_biking.html',context)
        # except:
        #     context = {}
        #     return render(request, 'user/u_rent_bike.html', context)
    else:
        userRoute1 = user_route.objects.get(id=routeId)
        context = {}
        context['bikeRouteId'] = userRoute1.id
        context['User'] = userid
        Bike = bike.objects.get(id=userRoute1.bike_id.id)
        context['Bike'] = Bike
        context['startTime'] = userRoute1.start_time
        context['Latitude'] = userRoute1.latitude
        context['longitude'] = userRoute1.longitude
        return render(request, 'user/u_biking.html', context)


@csrf_exempt
def recordLocation(request):
    userid = request.COOKIES.get("u_userid")
    bikeid = request.POST.get("bikeid")
    bikeRouteId = request.POST.get("bikeRouteId")
    latitude = request.POST.get("latitude")
    longitude = request.POST.get("longitude")

    startTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    new_time = datetime.datetime.strptime(startTime, '%Y-%m-%d %H:%M:%S')

    UserRent = user_route.objects.get(id=bikeRouteId)
    User = user_account.objects.get(id=userid)
    Bike = bike.objects.get(id=bikeid)
    obj = bike_route(
        user_rent_id=UserRent,
        user_id=User,
        bike_id=Bike,
        lat=latitude,
        lng=longitude,
        time=new_time
    )
    obj.save()
    return HttpResponse("success")

@csrf_exempt
def returnBike(request):
    userid = request.COOKIES.get("u_userid")
    bikeid = request.POST.get("bikeid")
    latitude = request.POST.get("latitude")
    longitude = request.POST.get("longitude")
    bikeRouteId = request.POST.get("bikeRouteId")
    rent_money = request.POST.get("rent_money")

    userRoute1 = user_route.objects.get(id=bikeRouteId)
    start = userRoute1.start_time
    start = start.replace(tzinfo=None)
    endTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    new_end_time = datetime.datetime.strptime(endTime, '%Y-%m-%d %H:%M:%S')
    hours = math.ceil((new_end_time-start).total_seconds()/3600)
    # -money
    user_get = user_account.objects.get(id=userid)
    o_money = float(user_get.money)
    s_money = float(rent_money)*hours
    money_now = o_money - s_money
    user_get.money = str(money_now)
    user_get.save()
    print(bikeid)
    # change the bike's status to needRepair and set the lan/lon
    bike.objects.filter(id=bikeid).update(new_lat=latitude, new_lng=longitude, is_use="False")

    # write bike history
    user_route.objects.filter(id=bikeRouteId).update(end_time=endTime, latitude=latitude, longitude=longitude,
                                                     ratings="False")
    html = ""
    if money_now>0:
        html = "You rent "+str(hours)+"hours, cost "+str(s_money)+"￡, now have"+str(money_now)+"￡. Thank you for use!"
    else:
        html = "You rent " + str(hours) + "hours, cost " + str(s_money) + "￡, now have" + str(money_now) + "￡. Thank you for use! Please recharge in time"
    return HttpResponse(html)