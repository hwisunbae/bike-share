from django.shortcuts import render
from django.http import HttpResponse
import time
from u_rent_bike.models import *
from u_login.models import *
from a_manage_bike.models import *
from a_manage_location.models import *
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    userid = request.COOKIES.get("u_userid")
    if userid:
        if request.GET:
            userid = request.COOKIES.get("u_userid")
            bikeid = request.GET.get("bikeId")
            latitude = request.GET.get("latitude")
            longitude = request.GET.get("longitude")
            bikeRouteId = request.GET.get("bikeRouteId")
            context = {}
            context['bikeRouteId'] = bikeRouteId
            context['bikeid'] = bikeid
            context['userid'] = userid
            context['latitude'] = latitude
            context['longitude'] = longitude

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
            context['loc_lats'] = loc_lats
            context['loc_lons'] = loc_lons
            context['bike_numbers'] = bike_numbers

            context['loc_lat_bike'] = loc_lat_bike
            context['loc_lon_bike'] = loc_lon_bike


            return render(request, 'user/u_bike_question.html', context)
        else:
            context = {}
            return render(request,'user/u_rent_bike.html',context)
    else:
        context = {}
        context["needLogin"] = "needLogin"
        return render(request, 'user/u_login.html')


@csrf_exempt
def recordQuestion(request):
    userid = request.COOKIES.get("u_userid")
    if userid:
        bikeid = request.POST.get("bikeId")
        latitude = float(request.POST.get("latitude"))
        longitude = float(request.POST.get("longitude"))
        type = request.POST.get("type")
        detail = request.POST.get("detail")
        bikeRouteId = request.POST.get("bikeRouteId")
        # cancel order do not -money
        endTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        # change the bike's status to needRepair and set the lan/lon
        bike.objects.filter(id=bikeid).update(new_lat=latitude,new_lng=longitude,is_use="needRepair")
        # write bike history
        user_route.objects.filter(id=bikeRouteId).update(end_time=endTime,latitude=latitude,longitude=longitude,ratings="reportRepair")
        Bike = bike.objects.get(id=bikeid)
        obj = bike_malfunction_history(
            bike_id=Bike,
            start_time=endTime,
            question_type=type,
            detail=detail,
            latitude=latitude,
            longitude=longitude
        )
        obj.save()
        return HttpResponse("success")
    else:
        return HttpResponse("needLogin")