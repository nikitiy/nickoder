# Generated by Django 4.2.4 on 2023-09-01 12:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_alter_offeritem_page'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offeritem',
            name='page',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='offer_item', to='home.homepage'),
        ),
    ]
