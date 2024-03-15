# Models
from .models import Questionnaire

# Decorators
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

# Utilities
import json
from django.http import HttpResponse

# Environment
import environ
env = environ.Env()
environ.Env.read_env()

# Create your views here.

@csrf_exempt
@require_http_methods(["POST"])
def questionnaire(request):
    data = json.loads(request.body)
   
    questionnaire = Questionnaire(user_group=data.get("userGroup"), state=data.get(
        "state"), county=data.get("county").capitalize(), benefits=data.get("benefits"))
    questionnaire.save(using='questionnaire')
    return HttpResponse(content="OK", status=200)