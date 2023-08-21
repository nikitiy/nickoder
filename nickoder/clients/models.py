from django.db import models

# Create your models here.


class Email(models.Model):

    name = models.CharField('Имя', max_length=32, blank=True, null=True)
    email = models.EmailField('E-mail')
    message = models.TextField('Сообщение', blank=True, null=True)
    time = models.DateTimeField('Дата получения')

    read = models.BooleanField('Прочитано?', default=False)

    def __str__(self):
        return f'От {self.email}, {"Прочитано" if self.read else "Не прочитано" }'

    class Meta:
        verbose_name = 'Почта клиента'
        verbose_name_plural = 'Почты клиентов'
