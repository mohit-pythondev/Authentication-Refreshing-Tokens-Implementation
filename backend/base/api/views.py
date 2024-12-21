from django.http import JsonResponse

def getRoutes(request):
    routes = [
        'api/tokens',
        'api/tokens/refresh',
    ]
    return JsonResponse(routes, safe=False)