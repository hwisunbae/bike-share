from django.shortcuts import render
from u_rent_bike.models import *
from django.http import HttpResponse
# Create your views here.

def index(request):
    userid = request.COOKIES.get("u_userid")
    if userid:
        context = {}
        userRoutes = user_route.objects.filter(user_id=userid)
        context["userRoutes"] = userRoutes
        return render(request, 'user/u_rent_bike_history.html',context)
    else:
        context = {}
        context["needLogin"] = "needLogin"
        return render(request, 'user/u_login.html')