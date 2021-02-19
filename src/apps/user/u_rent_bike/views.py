from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail, EmailMultiAlternatives
from django.conf import settings
from u_login.models import *
from a_manage_bike.models import *
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    context = {}
    return render(request, 'user/u_rent_bike.html', context)

@csrf_exempt  # when you need ajax you must use it! to skip from verification
def check_mail(request):
    if request.POST:
        subject = 'Bike Password '
        text_content = 'important.'


        email = str(request.COOKIES.get("u_username"))
        bikeid = request.POST.get("bikeid")
        bike_get = None
        try:
            bike_get = bike.objects.get(id=bikeid)
        except:
            return HttpResponse("notExist")
        open_password = bike_get.open_password
        code = open_password
        rentMoney = bike_get.rent_money
        html_content = '<p>The email code is <strong>'+str(code)+'</strong>邮件</p>'
        from_email = settings.DEFAULT_FROM_EMAIL
        msg = EmailMultiAlternatives(subject, text_content, from_email, [email])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        returnCode = "Password:"+str(open_password)+"Rent Money:"+str(rentMoney)+"￡/H"

        return HttpResponse(returnCode)