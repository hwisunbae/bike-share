from django.shortcuts import render
from django.http import HttpResponse
from u_login.models import *
from django.views.decorators.csrf import csrf_exempt

def index(request):
    context = {}
    users = user_account.objects.filter()
    context['users'] = users
    return render(request, 'admin/a_manage_user.html', context)


# show the index pages of add new user
def addNewUser(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_add_user.html', context)

# action of add a new user
@csrf_exempt
def addNewUser_do(request):
    if request.POST:
        username = request.POST.get('username')
        # check email
        is_duplicate = user_account.objects.filter(username=username)
        if is_duplicate:
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

# action of show manage user
def manageUser(request):
    if request.POST:
        users = user_account.objects.filter().order_by("-id")[0:10]
        context = {}
        context['users'] = users
        return render(request, 'admin/a_index.html', context)
    else:
        return HttpResponse("error")

def userBikeHistory(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_user_bike_history.html', context)


def userRepairHistory(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_user_repair_history.html', context)


def userRecharge(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_user_recharge.html', context)

def userRechargeHistory(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_user_recharge_history.html', context)