# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'teacher_helper',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password',
    }
}

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-c^#z=%gx4rf2zt*goh!kprggq--@0on)zo77aaqt=8567*t-^z'