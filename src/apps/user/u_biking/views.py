from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    if request.GET:
        bikeid = request.GET.get("bikeid")
        # bike isused history
        # user history
        # user route

        context = {}
        context['login'] = 'hello'
        return render(request,'usear/u_biking.html',context)