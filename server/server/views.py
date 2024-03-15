# Decorators
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

# Utilities
from django.http import HttpResponse

@csrf_exempt
@require_http_methods(["GET"])
def healthcheck(request):
    return HttpResponse(f'Server listening on {request.get_host()}', status=200)