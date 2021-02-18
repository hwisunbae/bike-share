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

# action of recharge user
@csrf_exempt
def rechargeMoney(request):
    if request.POST:
        id = request.POST.get('id')
        oldMoney = request.POST.get('money')
        rechargeMoney = request.POST.get('rechargeMoney')
        money = float(oldMoney) + float(rechargeMoney)
        user_account.objects.filter(id=id).update(money=money)
        return HttpResponse("success")
    else:
        return HttpResponse("error")


@csrf_exempt
def deleteUser_do(request):
    if request.POST:
        id = request.POST.get('id')
        user_account.objects.filter(id=id).delete()
        return HttpResponse("success")
    else:
        return HttpResponse("error")

@csrf_exempt
def changeInformation_do(request):
    if request.POST:
        id = request.POST.get('id')
        email = request.POST.get('email')
        telephone = request.POST.get('telephone')
        location = request.POST.get('location')
        password = request.POST.get('password')
        if email == "" or email == None:
            if password == "" or password==None:
                user_account.objects.filter(id=id).update(telephone=telephone,location=location)
            else:
                user_account.objects.filter(id=id).update(telephone=telephone,location=location,password=password)
        else:
            is_duplicate = user_account.objects.filter(username=email)
            if is_duplicate:
                return HttpResponse("repeat")
            if password == "" or password==None:
                user_account.objects.filter(id=id).update(username=email,telephone=telephone,location=location)
            else:
                user_account.objects.filter(id=id).update(username=email,telephone=telephone,location=location,password=password)
        return HttpResponse("success")
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
