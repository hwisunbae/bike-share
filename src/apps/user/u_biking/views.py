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
    if userid:
        userRoute = user_route.objects.filter(user_id=userid)
        context = {}

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

        routeId = None
        for i in userRoute:
            if i.end_time == None or i.end_time == "":
                routeId = i.id

        if routeId == None:
            bikeid = request.GET.get("bikeid")
            Latitude = request.GET.get("latitude")
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

            # location bike_count_now -1  and change the bike location to another make the empty to
            if Bike.new_lat != Bike.location_id.lat and Bike.new_lng != Bike.location_id.lng:
                location_get = location.objects.get(id=Bike.location_id.id)
                location_get.bike_count_now -= 1
                location_get.save()


                l = location.objects.get(id=1)
                bike.objects.filter(id=bikeid).update(location_id=1)



            bikeRouteId = user_route.objects.get(user_id=userid,bike_id=bikeid,latitude=Latitude,longitude=longitude,start_time=startTime)

            context['bikeRouteId'] = bikeRouteId.id
            context['User'] = userid
            context['Bike'] = Bike
            context['startTime'] = startTime
            context['latitude'] = Latitude
            context['longitude'] = longitude

            context['loc_lat_route'] = []
            context['loc_lon_route'] = []

            return render(request,'user/u_biking.html',context)
            # except:
            #     context = {}
            #     return render(request, 'user/u_rent_bike.html', context)
        else:
            userRoute1 = user_route.objects.get(id=routeId)
            context['bikeRouteId'] = userRoute1.id
            context['User'] = userid
            Bike = bike.objects.get(id=userRoute1.bike_id.id)
            context['Bike'] = Bike
            context['startTime'] = userRoute1.start_time
            context['latitude'] = userRoute1.latitude
            context['longitude'] = userRoute1.longitude

            userRoutes = bike_route.objects.filter(id=routeId)

            loc_lat_route = []
            loc_lon_route = []
            for i in userRoutes:
                if i.new_lat != None:
                    loc_lat_route.append(float(i.lat))
                    loc_lon_route.append(float(i.lng))
            context['loc_lat_route'] = loc_lat_route
            context['loc_lon_route'] = loc_lon_route
            return render(request, 'user/u_biking.html', context)
    else:
        context = {}
        context["needLogin"] = "needLogin"
        return render(request, 'user/u_login.html')


@csrf_exempt
def recordLocation(request):
    userid = request.COOKIES.get("u_userid")
    if userid:
        bikeid = request.POST.get("bikeid")
        bikeRouteId = request.POST.get("bikeRouteId")
        latitude = float(request.POST.get("latitude"))
        longitude = float(request.POST.get("longitude"))

        startTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        # new_time = datetime.datetime.strptime(startTime, '%Y-%m-%d %H:%M:%S')

        UserRent = user_route.objects.get(id=bikeRouteId)
        User = user_account.objects.get(id=userid)
        Bike = bike.objects.get(id=bikeid)
        obj = bike_route(
            user_rent_id=UserRent,
            user_id=User,
            bike_id=Bike,
            lat=latitude,
            lng=longitude,
            time=startTime
        )
        obj.save()
        return HttpResponse("success")
    else:
        return HttpResponse("needLogin")

@csrf_exempt
def returnBike(request):
    userid = request.COOKIES.get("u_userid")
    if userid:
        bikeid = request.POST.get("bikeid")

        latitude = float(request.POST.get("latitude"))

        longitude = float(request.POST.get("longitude"))
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
        # change the bike's status to needRepair and set the lan/lon
        bike.objects.filter(id=bikeid).update(new_lat=latitude, new_lng=longitude, is_use="False")

        # write bike history
        user_route.objects.filter(id=bikeRouteId).update(end_time=endTime, latitude=latitude, longitude=longitude,fee=s_money,
                                                         ratings="Ok")
        html = ""
        if money_now>0:
            html = "You rent "+str(hours)+"hours, cost "+str(s_money)+"￡, now have"+str(money_now)+"￡. Thank you for use!"
        else:
            html = "You rent " + str(hours) + "hours, cost " + str(s_money) + "￡, now have" + str(money_now) + "￡. Thank you for use! Please recharge in time"
        return HttpResponse(html)
    else:
        return HttpResponse("needLogin")