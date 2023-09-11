from rest_framework import serializers
from .model_fragments import ApplicationForm


class ApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationForm
        fields = [
            'name', 'mail', 'message'
        ]
