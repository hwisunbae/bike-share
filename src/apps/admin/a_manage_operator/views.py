from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from o_login.models import *

def index(request):
    if request.GET:
        pass
    else:
        context = {}
        operators = operator_account.objects.filter()
        context['operators'] = operators
        return render(request, 'admin/a_manage_operator.html', context)

def addNewOperator(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_add_operator.html', context)


# action of add a new user
@csrf_exempt
def addNewOperator_do(request):
    if request.POST:
        username = request.POST.get('username')
        # check email
        is_duplicate = operator_account.objects.filter(username=username)
        if is_duplicate:
            return HttpResponse("repeat")
        password = request.POST.get('password')
        telephone = request.POST.get('telephone')
        locations = request.POST.get('locations')
        types = request.POST.get('types')
        print(username)
        print(password)
        print(telephone)
        print(locations)
        print(types)
        obj = operator_account(
            username=username,
            password=password,
            telephone=telephone,
            type=types,
            location=locations,
        )
        print(obj)
        obj.save()
        return HttpResponse("success")
    else:
        return HttpResponse("error")