from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from u_login.models import *
# Create your views here.


def index(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'admin/a_manage_user.html',context)


def addNewUser(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'admin/a_add_user.html',context)
@csrf_exempt
def addNewUser_do(request):
    if request.POST:
        username = request.POST.get('username')
        # check email
        isuser = user_account.objects.filter(username=username)
        if isuser:
            return HttpResponse("repeat")
        password = request.POST.get('password')
        telephone = request.POST.get('telephone')
        money = request.POST.get('money')
        location = request.POST.get('location')
        obj = user_account(
            username=username,
            password=password,
            telephone=telephone,
            money=money,
            location=location,
        )
        obj.save()
        return HttpResponse("success")
    else:
        return HttpResponse("error")


def userBikeHistory(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'admin/a_user_bike_history.html',context)


def userRepairHistory(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'admin/a_user_repair_history.html',context)


def userRecharge(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'admin/a_user_recharge.html',context)

def userRechargeHistory(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'admin/a_user_recharge_history.html',context)