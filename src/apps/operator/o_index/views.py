import hashlib
from a_manage_bike.models import *
from u_biking.models import *
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    userid = request.COOKIES.get("o_userid")
    if userid:
        bikes = bike.objects.all()
        locations = location.objects.all()
        loc_lats = []
        loc_lons = []
        bike_numbers = []
        for i in locations:
            if i.id !=1:
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
        return render(request, 'operator/o_index.html', context)
    else:
        return render(request, 'operator/o_login.html')
