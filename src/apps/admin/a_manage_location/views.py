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

def addNewLocation_do(request):
    if request.POST:

        return HttpResponse('success')
    else:
        return HttpResponse("error")