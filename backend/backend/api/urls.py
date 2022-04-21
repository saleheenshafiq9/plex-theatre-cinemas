from . import views
from rest_framework_nested import routers
from . import views

router=routers.DefaultRouter()
router.register('movies', views.MovieViewSet)

urlpatterns=router.urls