from rest_framework.generics import CreateAPIView

from .model_fragments import ApplicationForm
from .serializers import ApplicationFormSerializer


class ApplicationFormViewSet(CreateAPIView):
    queryset = ApplicationForm.objects.all()
    serializer_class = ApplicationFormSerializer
