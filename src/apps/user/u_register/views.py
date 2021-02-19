from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import HttpResponse
from django.core.mail import send_mail, EmailMultiAlternatives
from django.conf import settings
import numpy as np
# Create your views here.
from django.views.decorators.csrf import csrf_exempt
import json
import hashlib
from u_login.models import *


def index(request):
    if request.GET:
        pass
    else:
        context = {}
        context['login'] = 'hello'
        return render(request,'user/u_register.html',context)


@csrf_exempt  # when you need ajax you must use it! to skip from verification
def check_mail(request):
    if request.POST:
        subject = 'Confirm Email '
        text_content = 'important.'
        email = request.POST.get('email')
        code = np.random.randint(10000,99999)
        html_content = '<p>The email code is <strong>'+str(code)+'</strong>邮件</p>'
        from_email = settings.DEFAULT_FROM_EMAIL
        msg = EmailMultiAlternatives(subject, text_content, from_email, [email])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        md5code = md5value(str(code).encode())
        return HttpResponse(md5code)


@csrf_exempt
def register_do(request):
    if request.POST:
        email = request.POST.get('email')
        is_duplicate = user_account.objects.filter(username=email)
        if is_duplicate:
            return HttpResponse("repeat")
        telephone = request.POST.get('telephone')
        password = request.POST.get('password')
        payPassword = request.POST.get('payPassword')
        location = request.POST.get('location')
        obj = user_account(
            username=email,
            password=password,
            telephone=telephone,
            location=location,
            payPassword=payPassword
        )
        obj.save()
        return HttpResponse("success")
    else:
        return HttpResponse("error")

def md5value(s):
    md5 = hashlib.md5()
    md5.update(s)
    return md5.hexdigest()
