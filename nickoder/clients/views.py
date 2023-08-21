from django.http import JsonResponse
from .models import Email
from django.utils import timezone

# Create your views here.


def get_mail(request):
    if request.method == "POST":
        email = Email(
            name=request.POST['name'],
            email=request.POST['email'],
            message=request.POST['message'],
            time=timezone.now()
        )
        email.save()

        response = {'status': True}

        return JsonResponse(response)
