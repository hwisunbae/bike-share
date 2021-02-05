from django.shortcuts import render
from django.http import HttpResponse
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