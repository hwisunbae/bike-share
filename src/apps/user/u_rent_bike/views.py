from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail, EmailMultiAlternatives
from django.conf import settings
from u_login.models import *
from a_manage_bike.models import *
from u_biking.models import *
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    userid = request.COOKIES.get("u_userid")
    if userid:
        userRoute = user_route.objects.filter(user_id=userid)
        routeId = None

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


        for i in userRoute:
            if i.end_time == None or i.end_time == "":
                routeId = i.id

        if routeId != None:
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
            context['locations'] = locations
            context['loc_lat_route'] = []
            context['loc_lon_route'] = []
            Bikes = bike.objects.filter(is_use="False")
            context['Bikes'] = Bikes
            return render(request, 'user/u_rent_bike.html', context)
    else:
        context = {}
        context["needLogin"] = "needLogin"
        return render(request, 'user/u_login.html')

@csrf_exempt  # when you need ajax you must use it! to skip from verification
def check_mail(request):
    if request.POST:
        subject = 'Bike Password '
        text_content = 'important.'

        email = str(request.COOKIES.get("u_username"))
        bikeid = request.POST.get("bikeid")
        bike_get = None
        try:
            bike_get = bike.objects.get(id=bikeid)
        except:
            return HttpResponse("notExist")
        open_password = bike_get.open_password
        code = open_password
        rentMoney = bike_get.rent_money
        print(open_password, code, rentMoney)
        html_content = '<p>The email code is <strong>'+str(code)+'</strong>??????</p>'
        # from_email = settings.DEFAULT_FROM_EMAIL
        # msg = EmailMultiAlternatives(subject, text_content, from_email, [email])
        # msg.attach_alternative(html_content, "text/html")
        # msg.send()
        returnCode = "Password:"+str(open_password)+"Rent Money:"+str(rentMoney)+"???/H"

        return HttpResponse(returnCode)
    # return HttpResponse("returnCode")