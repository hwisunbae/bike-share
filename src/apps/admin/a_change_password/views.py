from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from a_login.models import *

def index(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request, 'admin/a_change_password.html', context)

# action of reset password
@csrf_exempt
def resetPassword(request):
    if request.POST:
        old_password = request.POST.get('old_password')
        new_password = request.POST.get('new_password')
        print(admin_account.objects.get(password='123456'))
        admin_account.objects.filter(password=old_password).update(password=new_password)
        print(admin_account.objects.filter(password=old_password).update(password=new_password))
        return HttpResponse("success")
    else:
        return HttpResponse("error")
