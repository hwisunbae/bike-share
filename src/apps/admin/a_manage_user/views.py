from django.shortcuts import render
from django.http import HttpResponse
import math
from u_login.models import *
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    pageCount = 8
    pageNum = 1
    context = {}
    pages = []

    pageNum = 0
    # user click this button will go to get
    if request.GET:
        username = request.GET.get("username")
        isSet = request.GET.get("isSet") # if user click restart means user want to see all the users
        if isSet:
            username = ""
        if username:
            users = user_account.objects.filter(username = username)
            context['username'] = username
        else:
            totalCount = user_account.objects.all().count()
            totalPageNum = math.ceil(totalCount / pageCount)
            context['totalCount'] = totalCount
            context['totalPageNum'] = totalPageNum
            pageNumCheck = request.GET.get("pageNum");
            if pageNumCheck == None or pageNumCheck=="":
                pageNumCheck=1
            pageNum = int(pageNumCheck)
            if pageNum > totalPageNum:
                pageNum = 1
            if totalPageNum >5:
                if pageNum < 3:
                    for i in range(1,pageNum+1):
                        pages.append(i)
                    for i in range(pageNum,5-pageNum+1):
                        pages.append(i)
                elif totalPageNum-pageNum >3:
                    pages.append(pageNum-2)
                    pages.append(pageNum-1)
                    pages.append(pageNum)
                    pages.append(pageNum+1)
                    pages.append(pageNum+2)
                else:
                    for i in range(0,totalPageNum-pageNum):
                        pages.append(pageNum-i)
                    for i in range(pageNum,totalPageNum+1):
                        pages.append(i)
            else:
                if pageNum  == 2 :
                    pages.append(pageNum -1)
                elif pageNum > 2:
                    pages.append(pageNum-2)
                    pages.append(pageNum-1)
                for i in range(pageNum,totalPageNum+1):
                    pages.append(i)
            userF = (pageNum-1)*pageCount
            userE = userF+pageCount
            users = user_account.objects.filter().order_by("id")[userF:userE]
            pagePre = pageNum - 1
            pageNext = pageNum + 1
            context["pagePre"] = pagePre
            context["pageNext"] = pageNext
            context["pageNum"] = pageNum
            context["totalPageNum"] = totalPageNum
            context["pages"] = pages
    # end check GET
    # the first show
    else:
        pageNum = 1
        totalCount = user_account.objects.all().count()
        totalPageNum = math.ceil(totalCount / pageCount)
        context['totalCount'] = totalCount
        context['totalPageNum'] = totalPageNum
        users = user_account.objects.filter().order_by("id")[0:8]
        if totalPageNum>5:
            for i in range(5):
                pages.append(i+1)
        else:
            for i in range(totalPageNum):
                pages.append(i+1)
        pagePre = pageNum - 1
        pageNext = pageNum + 1
        context["pagePre"] = pagePre
        context["pageNext"] = pageNext
        context["pageNum"] = pageNum
        context["pages"] = pages
        context["totalPageNum"] = totalPageNum
        # end first show

    context['users'] = users
    return render(request, 'admin/a_manage_user.html', context)





# show the index pages of add new user
def addNewUser(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'admin/a_add_user.html',context)



# action of add a new user
@csrf_exempt
def addNewUser_do(request):
    if request.POST:
        username = request.POST.get('username')
        # check email
        isUser = user_account.objects.filter(username=username)
        if isUser:
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