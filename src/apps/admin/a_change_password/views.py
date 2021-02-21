from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from a_login.models import *
from a_login.views import *

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
        new_password = request.POST.get("new_password")
        userid = request.COOKIES.get("userid")
        md5code = md5value(str(new_password).encode())
        admin_account.objects.filter(id=userid).update(password=md5code)
        return HttpResponse("success")
    else:
        return HttpResponse("error")
