from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_manage_bike.html', context)

def addNewLocation(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_add_location.html', context)

# @csrf_exempt
def addNewLocation_do(request):
    if request.POST:
        # username = request.POST.get('username')
        # # check email
        # isUser = user_account.objects.filter(username=username)
        # if isUser:
        #     return HttpResponse("repeat")
        # password = request.POST.get('password')
        # telephone = request.POST.get('telephone')
        # money = request.POST.get('money')
        # location = request.POST.get('location')
        # obj = user_account(
        #     username=username,
        #     password=password,
        #     telephone=telephone,
        #     money=money,
        #     location=location,
        # )
        # obj.save()
        return HttpResponse('success')
    else:
        return HttpResponse("error")