from django.shortcuts import render
from django.http import HttpResponse
from u_login.models import *
# Create your views here.


def index(request):
    userid = request.COOKIES.get("u_userid")
    if userid:
        context = {}
        user = user_account.objects.get(id = userid)
        context["user"] = user
        return render(request, 'user/u_user_information.html', context)
    else:
        return render(request, 'user/u_login.html')
