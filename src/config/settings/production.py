from .base import *

DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-_=x107yjjb&c18ty)n_a#47=r5#3&^lxiv799)jdfk-3)w4mls"

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ["nickoder.tech", "www.nickoder.tech"]

# Rest framework
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ]
}

try:
    from .local import *
except ImportError:
    pass
